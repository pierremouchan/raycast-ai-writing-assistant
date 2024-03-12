# AI Writing Assistant

AI Writing Assistant is here to assist you in any of your writing tasks, from fixing grammar to improving a paragraph.

This extension only work with [Raycast](https://raycast.com)

<video width="862" src="https://github.com/pierremouchan/raycast-ai-writing-assistant/assets/38973205/32fe5400-bc29-45c1-8641-202e83a2a837"></video>

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
5. Add your `Open AI API Key` to the configuration ([Guide here](https://www.howtogeek.com/885918/how-to-get-an-openai-api-key/))

<img width="862" src="https://github.com/pierremouchan/raycast-ai-writing-assistant/assets/38973205/b45f4e4d-31a8-4da0-b98f-97fc569a6e4c"/>

6. Enjoy the command 🎉

## Features

Simply select any text, open the writing assistant, choose any command, and paste the result! Voila!

<video width="862" src="https://github.com/pierremouchan/raycast-ai-writing-assistant/assets/38973205/32fe5400-bc29-45c1-8641-202e83a2a837"></video>

The AI writing Assistant is here to help you with any tasks you want. The extension comes with default commands that you can override and extend:

<img width="862" src="https://github.com/pierremouchan/raycast-ai-writing-assistant/assets/38973205/051f4c88-eb26-40f4-b632-74a22b009308"/>

You have access to the default example file here: `assets/default-ai-commands-example.csv`
You can open it in any CSV tool, add as many commands as you want, and configure the Raycast extension to use this new file.

```tip
Please have a look at how I structured my commands, your selected text will be appended between an opening `***START_MESSAGE***` and a closing `***END_MESSAGE***`. This helps the AI to be more precise and only output the desired result.
```

<img width="862" src="https://github.com/pierremouchan/raycast-ai-writing-assistant/assets/38973205/8b45f610-01ee-49c2-a26a-a6dc98b3922e"/>

Do you want to specify a command for one-time use? Simply write it and press enter.
ChatGPT is at your fingertips!

<video width="862" src="https://github.com/pierremouchan/raycast-ai-writing-assistant/assets/38973205/7d418624-cd7d-4d3e-8bda-14083a0980aa"></video>

## Why is it not in the official Raycast store?

Right now the extension is missing some features and minor details that I would like to address before publishing it live; however, if you wish to contribute to the project, feel free to contact me, open issues, or create PRs.


## License

MIT License
