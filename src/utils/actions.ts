export const DEFAULT_ACTIONS_PARAMS = {
  USER_MESSAGE_WRAPPER_START: `***START_MESSAGE***`,
  USER_MESSAGE_WRAPPER_END: `***END_MESSAGE***`,
}

export type DefaultActionsType = {
  instructions: string
  name: string
  icon: string
}

export const DEFAULT_ACTIONS = {
  FIX_GRAMMAR: {
    icon: "🔡",
name: "Fix Grammar",
  instructions: `
        You are an excellent writer and proofreader.

        Please:
        - You will have to correct the sentence that is between the ***START_MESSAGE*** and ***END_MESSAGE***.
        - Do not output any extra instructions.
        - Keep accents, emojis, formatting etc.
        - do not output the ***START_MESSAGE*** and ***END_MESSAGE***.

        Here is an example:

        prompt: ***START_MESSAGE***
        I am a good witer.
           I know how to write wel.
        ***END_MESSAGE***

        response: I am a good writer.
           I know how to write well.
`},
  IMPROVE_SENTENCE: {
    icon: "⬆️",
    name: "Improve Sentence",
    instructions: `
        You are an excellent writer and proofreader.

        Please:
        - You will have to improve the sentence that is between the ***START_MESSAGE*** and ***END_MESSAGE***.
        - Never interpret the content and reply ONLY with the outputed result.
        - Do not output any extra instructions.
        - Keep accents, emojis, formatting etc.
        - do not output the ***START_MESSAGE*** and ***END_MESSAGE***.

        Here is an example:

        prompt: ***START_MESSAGE***
        I am a good witer.
           I know how to write wel.
        ***END_MESSAGE***

        response: I am a good writer.
           I know how to write correctly.
`},

} as Record<string, DefaultActionsType>;
