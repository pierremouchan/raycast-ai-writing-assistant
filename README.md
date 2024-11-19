# AI Writing Assistant

AI Writing Assistant is here to assist you with any of your writing tasks, from fixing grammar to generating a list of action items.

This extension only work with [Raycast](https://raycast.com)

<video src="https://github.com/pierremouchan/raycast-ai-writing-assistant/assets/38973205/32fe5400-bc29-45c1-8641-202e83a2a837"></video>


## Motivation

As a non-native English speaker, I often struggle to find my words and that can lead to spelling mistakes, with the help of such an assistant, I can now correct myself and improve along the way.


## Installation

Currently, you need to clone this repo and install it locally in developer mode.

You will need to have [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io/) installed.

0. Open your terminal.
1. Clone this repo `git clone https://github.com/pierremouchan/raycast-ai-writing-assistant`
2. Go to the folder `cd raycast-ai-writing-assistant`
3. Install dependencies `npm install`
4. Go to Raycast, run `Import Extension` and select the folder
5. Add either your `Open AI API Key / Anthropic API Key / Groq API Key` to the configuration ([Guide here](https://www.howtogeek.com/885918/how-to-get-an-openai-api-key/))
   (It will automatically decide which API to use based on the key)
7. Enjoy the command 🎉

<img src="https://github.com/pierremouchan/raycast-ai-writing-assistant/assets/38973205/b45f4e4d-31a8-4da0-b98f-97fc569a6e4c"/>


## Features

Simply select any text, open the writing assistant, choose any command, and paste the result! Voila!

<video src="https://github.com/pierremouchan/raycast-ai-writing-assistant/assets/38973205/32fe5400-bc29-45c1-8641-202e83a2a837"></video>

The AI writing Assistant is here to help you with any tasks you want. The extension comes with default commands that you can override and extend:

<img src="https://github.com/pierremouchan/raycast-ai-writing-assistant/assets/38973205/051f4c88-eb26-40f4-b632-74a22b009308"/>

You have access to the default example file here: `assets/default-ai-commands-example.csv`
You can open it in any CSV tool, add as many commands as you want, and configure the Raycast extension to use this new file.

Please have a look at how I structured my commands, your selected text will be appended between an opening `<input>` and a closing `</input>`. This helps the AI to be more precise and only output the desired result.

The result will be wrapped inside a `<output>` and `</output>` XML tags.

<img src="https://github.com/pierremouchan/raycast-ai-writing-assistant/assets/38973205/8b45f610-01ee-49c2-a26a-a6dc98b3922e"/>

Do you want to specify a command for one-time use? Simply write it and press enter.
ChatGPT is at your fingertips!

<video src="https://github.com/pierremouchan/raycast-ai-writing-assistant/assets/38973205/7d418624-cd7d-4d3e-8bda-14083a0980aa"></video>


## Why is it not in the official Raycast store?

Right now the extension is missing some features and minor details that I would like to address before publishing it live; however, if you wish to contribute to the project, feel free to contact me, open issues, or create PRs.


## License

MIT License
