import { ActionPanel, List } from "@raycast/api";
import AIAction from "./components/AIAction";
import { useEffect, useState } from "react";
import { DEFAULT_ACTIONS, DEFAULT_ACTIONS_PARAMS, DefaultActionsType } from "./utils/actions";


import PREFERENCES from "./utils/preferences";
import parseCSV from "./utils/parse-csv";


export default function Command() {
  const [searchText, setSearchText] = useState("");
  const [availableActions, setAvailableActions] = useState<Record<string, DefaultActionsType> | null>(null);
  const [filteredActions, setFilteredActions] = useState<string[] | null>(null);


  useEffect(() => {
    async function getActions() {
      // if no commands are set, use the default actions
      if (!PREFERENCES.commands) {
        setAvailableActions(DEFAULT_ACTIONS);
        return;
      }
       // else parse the csv file and set the available actions
      const parsedData = await parseCSV(PREFERENCES.commands)
      const actions: Record<string, DefaultActionsType> = {};
      parsedData.forEach((item: DefaultActionsType) => {
        actions[item.name] = item;
      });
      setAvailableActions(actions);
    }
    getActions()
  },[])

    // if there are available actions, filter them based on the search text
  useEffect(() => {
    if (availableActions) {
    if (searchText.length > 0) {
        setFilteredActions(Object.keys(availableActions).filter((item) => item.toLowerCase().includes(searchText.toLowerCase())));
    } else {
      setFilteredActions(Object.keys(availableActions));
    }
    }
  }, [searchText, availableActions]);

  return (
    <List
    isLoading={!filteredActions}
      onSearchTextChange={setSearchText}
    >
      {availableActions && filteredActions && filteredActions.length > 0?

          <>
          {filteredActions.map((action, index) => (
            <List.Item
              accessories={[{ text: `${index + 1}` }]}
              key={action}
              title={availableActions[action].name}
              icon={availableActions[action].icon}
              actions={
                <ActionPanel>
                  <AIAction
                    index={index + 1}
                    instruction={{
                      system: availableActions[action].instructions,
                      userMessageWrapper: {
                        start: DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_START,
                        end: DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_END,
                      }
                    }} />
                </ActionPanel>
              }
            />
          ))
          }
    </>
        :

        // if there are no available actions, use the user's search text as the action
        (
          <List.Item
            accessories={[{ text: `1` }]}
            icon={'🙋'}
            title={searchText}
            actions={
              <ActionPanel>
                <AIAction
                  index={1}
                  instruction={{
                    system: `
${searchText}
- do not output the ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_START} and ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_END} tags.
                    `,
                    userMessageWrapper: {
                      start: DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_START,
                      end: DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_END,
                    },
                    submitText: "Ask"
                  }} />
              </ActionPanel>
            }
          />

        )
      }

    </List>
  );
}
