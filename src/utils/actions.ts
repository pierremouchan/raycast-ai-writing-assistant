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
        - You will have to correct the sentence that is between the ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_START} and ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_END}.
        - Do not output any extra instructions.
        - Keep accents, emojis, formatting etc.
        - do not output the ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_START} and ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_END} tags.

        Here is an example:

        prompt: ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_START}
        I am a good witer.
           I know how to write wel.
        ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_END}

        response: I am a good writer.
           I know how to write well.
`},
  IMPROVE_SENTENCE: {
    icon: "⬆️",
    name: "Improve Sentence",
    instructions: `
        You are an excellent writer and proofreader.

        Please:
        - You will have to improve the sentence that is between the ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_START} and ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_END}.
        - Never interpret the content and reply ONLY with the outputed result.
        - Do not output any extra instructions.
        - Keep accents, emojis, formatting etc.
        - do not output the ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_START} and ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_END} tags.

        Here is an example:

        prompt: ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_START}
        I am a good witer.
           I know how to write wel.
        ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_END}

        response: I am a good writer.
           I know how to write correctly.
`},
  TRANSLATE_TO_FRENCH: {
    icon: "🇫🇷",
    name: "Translate to French",
    instructions: `
        You are an excellent translator.

        Please:
        - Translate the sentence that is between the ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_START} and ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_END} to French.
        - Do not output any extra instructions.
        - Keep accents, emojis, formatting etc.
        - do not output the ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_START} and ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_END} tags.

        Here is an example:

        prompt: ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_START}
        I am a good witer.
           I know how to write wel.
        ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_END}

        response: Je suis un bon écrivain.
           Je sais écrire correctement.
`},
  TRANSLATE_TO_ENGLISH: {
    icon: "🇬🇧",
    name: "Translate to English",
    instructions: `
        You are an excellent translator.

        Please:
        - Translate the sentence that is between the ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_START} and ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_END} to English.
        - Do not output any extra instructions.
        - Keep accents, emojis, formatting etc.
        - do not output the ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_START} and ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_END} tags.

        Here is an example:

        prompt: ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_START}
        Je suis un bon écrivain.
           Je sais écrire correctement.
        ${DEFAULT_ACTIONS_PARAMS.USER_MESSAGE_WRAPPER_END}

        response: I am a good writer.
           I know how to write correctly.
`},

} as Record<string, DefaultActionsType>;
