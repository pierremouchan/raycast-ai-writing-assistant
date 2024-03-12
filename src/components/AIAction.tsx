import { Action, Clipboard, Keyboard, getSelectedText, popToRoot, showHUD } from "@raycast/api";
import { exec  } from "child_process";
import OpenAI from "openai";
import PREFERENCES from "../utils/preferences";

const openai = new OpenAI({
  apiKey: PREFERENCES.apiKey,
});



type PropsType = {
  instruction: {
    system: string
    userMessageWrapper: {
      start: string
      end: string
    }
    submitText?: string
  }
  index: number
}

const AIAction = ({ instruction, index }: PropsType) => {

  const handleSendText = async () => {
    try {
      // play sound and show loading state
      await showHUD("Loading...");
  exec('afplay /System/Library/Sounds/Frog.aiff');

      // get selected text from frontmost app
      const selectedText = await getSelectedText();

      // send request and action to OpenAI
      const res = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: instruction.system,
          },
          {
            role: "user",
            content: `
             ${instruction.userMessageWrapper.start}
             ${selectedText}
             ${instruction.userMessageWrapper.end}
            `
          },
        ],
      });


      // get back the response from OpenAI
      const response = res.choices[0].message.content;

      // check if response is empty
      if (!response) {
        throw new Error("Failed to get response from GPT-3");
      }


      // copy response to clipboard and show success message + sound
      await Clipboard.copy(response);
      await showHUD("Copied back response to clipboard");
  exec('afplay /System/Library/Sounds/Blow.aiff');

    } catch (error) {
      showHUD("Failed to get selected text or get response from ChatGPT. Please try again.");
    } finally {
      // close the app
      popToRoot({ clearSearchBar: true });
    }
  };


  return <Action.SubmitForm
  shortcut={{ modifiers: ["cmd"], key: index.toString() as Keyboard.KeyEquivalent }}
    title={instruction.submitText || "Select"} onSubmit={handleSendText} />
};

export default AIAction;
