import { Action, Clipboard, Keyboard, getSelectedText, popToRoot, showHUD } from "@raycast/api";
import { exec } from "child_process";
import PREFERENCES from "../utils/preferences";
import Anthropic from "@anthropic-ai/sdk";
import OpenAI from "openai";
import Groq from "groq-sdk";
import { TextBlock } from "@anthropic-ai/sdk/resources";

const openai = new OpenAI({
  apiKey: PREFERENCES.apiKey,
});
const anthropic = new Anthropic({
  apiKey: PREFERENCES.apiKey,
});
const groq = new Groq({
  apiKey: PREFERENCES.apiKey,
});

type PropsType = {
  instruction: {
    system: string;
    submitText?: string;
  };
  index: number;
};

const AIAction = ({ instruction, index }: PropsType) => {
  const handleSendText = async () => {
    try {
      // play sound and show loading state
      await showHUD("Loading...");
      exec("afplay /System/Library/Sounds/Frog.aiff");

      let response: string | null = null;

      // get selected text from frontmost app
      const selectedText = await getSelectedText();

      // if the API key starts with "sk-", use the anthropic API
      if (PREFERENCES.apiKey.startsWith("sk-ant-api")) {
        // send request and action to anthropic
        const res = await anthropic.messages.create({
          model: "claude-3-5-haiku-latest",
          max_tokens: 1024,
          system: instruction.system,
          messages: [
            {
              role: "user",
              content: `Here is the input text:
              <input>
             ${selectedText}
             </input>`,
            },
          ],
        });

        // get back the response from anthropic
        response = (res.content[0] as TextBlock).text

        // else if the API key starts with "gsk_", use the groq API
      } else if (PREFERENCES.apiKey.startsWith("gsk_")) {
        // send the request to groq
        const chatCompletion = await groq.chat.completions.create({
          model: "llama3-70b-8192",
          messages: [
            {
              role: "system",
              content: instruction.system,
            },
            {
              role: "user",
              content: `Here is the input text:
              <input>
             ${selectedText}
             </input>`,
            },
          ],
        });

        response = chatCompletion.choices[0].message.content;
      } else {
        // send request and action to OpenAI
        const res = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          max_tokens: 1024,
          messages: [
            {
              role: "system",
              content: instruction.system,
            },
            {
              role: "user",
              content: `Here is the input text:
              <input>
             ${selectedText}
             </input>`,
            },
          ],
        });

        // get back the response from OpenAI
        response = res.choices[0].message.content;
      }

      // check if response is empty
      if (!response) {
        throw new Error("Failed to get response from AI");
      }

      // remove the <output> and </output> tags
      response = response.replace(/<output>/g, "").replace(/<\/output>/g, "");
      response = response.trim();

      // copy response to clipboard and show success message + sound
      await Clipboard.copy(response);
      await showHUD("Copied back response to clipboard");
      exec("afplay /System/Library/Sounds/Blow.aiff");
    } catch (error) {
      console.log(error);
      showHUD("Failed to get selected text or get response from ChatGPT. Please try again.");
    } finally {
      // close the app
      popToRoot({ clearSearchBar: true });
    }
  };

  return (
    <Action.SubmitForm
      shortcut={{ modifiers: ["cmd"], key: index.toString() as Keyboard.KeyEquivalent }}
      title={instruction.submitText || "Select"}
      onSubmit={handleSendText}
    />
  );
};

export default AIAction;
