# SpeedyBot

SpeedyBot is a Slack bot built with Node.js and Slack Bolt. It provides useful slash commands, responds with API-powered information, and runs continuously on a Nest server.

## Features

* Check bot latency with `/speedybot-ping`
* View available commands with `/speedybot-help`
* Get a random cat fact with `/speedybot-catfact`
* Get a random joke with `/speedybot-joke`
* Hosted on Nest and configured to run 24/7 using systemd

## Tech Stack

* Node.js
* JavaScript
* Slack Bolt
* Axios
* Slack API
* Nest

## Project Structure

```text
speedybot/
├── index.js
├── package.json
├── package-lock.json
├── .env
└── README.md
```

## Running Locally

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
SLACK_BOT_TOKEN=your_bot_token
SLACK_APP_TOKEN=your_app_token
```

4. Start the bot:

```bash
node index.js
```

## Deployment

The bot is deployed on a Nest server and managed with a systemd service so it automatically starts after a reboot and restarts if it stops unexpectedly.

## Commands

| Command              | Description                                     |
| -------------------- | ----------------------------------------------- |
| `/speedybot-ping`    | Returns the bot's response latency.             |
| `/speedybot-help`    | Lists all available commands.                   |
| `/speedybot-catfact` | Fetches a random cat fact from an external API. |
| `/speedybot-joke`    | Fetches a random joke from an external API.     |

## Future Improvements

* Add more API-powered commands
* Support interactive Slack features
* Improve error handling
* Organize commands into separate files

## AI Usage

AI was used to help understand documentation, troubleshoot errors, and explain concepts during development. The implementation, testing, deployment, and customization of the project were completed by me.
