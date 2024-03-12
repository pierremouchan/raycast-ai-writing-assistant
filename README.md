# AI Writing Assistant

AI Writing Assistant is here to assist you in any of your writing tasks, from fixing grammar to improving a paragraph.

This extension only work with [Raycast](https://raycast.com)

video

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

image

6. Enjoy the command 🎉

## Features

Simply select any text, open the writing assistant, choose any command, and paste the result! Voila!

video

The AI writing Assistant is here to help you with any tasks you want. The extension comes with default commands that you can override and extend:

image

You have access to the default example file here: `assets/default-ai-commands-example.csv`
You can open it in any CSV tool, add as many commands as you want, and configure the Raycast extension to use this new file.

```tip
Please have a look at how I structured my commands, your selected text will be appended between an opening `***START_MESSAGE***` and a closing `***END_MESSAGE***`. This helps the AI to be more precise and only output the desired result.
```

image

Do you want to specify a command for one-time use? Simply write it and press enter.
ChatGPT is at your fingertips!

video

## Why is it not in the official Raycast store?

Right now the extension is missing some features and minor details that I would like to address before publishing it live; however, if you wish to contribute to the project, feel free to contact me, open issues, or create PRs.


## License

MIT License