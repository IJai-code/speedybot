# SpeedyBot

SpeedyBot is a Slack bot built with Node.js and Slack Bolt. It provides useful slash commands inside Slack, including bot status checks, API powered responses, and simple utility features.

This project was created as part of Hack Club Stardance.

## Features

SpeedyBot currently supports:

### `/speedybot-ping`

Checks whether the bot is online and returns the response latency.

### `/speedybot-help`

Shows a list of available commands.

### `/speedybot-catfact`

Fetches a random cat fact using an external API.

### `/speedybot-joke`

Fetches a random joke using an external API.

## How It Works

SpeedyBot uses Slack slash commands to receive user requests. When a command is used, Slack sends the request to the bot. The bot processes it, optionally communicates with an API, and sends a response back into Slack.

The bot runs continuously on a Nest server using a systemd service, allowing it to stay online even when I am not actively running it.

## Technologies Used

* Node.js
* Slack Bolt
* JavaScript
* Axios
* Slack API
* Nest server hosting

## Setup

To run SpeedyBot locally:

1. Clone the repository.

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with your Slack tokens:

```env
SLACK_BOT_TOKEN=your_bot_token
SLACK_APP_TOKEN=your_app_token
```

4. Start the bot:

```bash
node index.js
```

## Deployment

SpeedyBot is deployed on Nest and runs as a systemd service. This keeps the bot running continuously and automatically restarts it if needed.

## AI Usage
None

## Future Improvements

Some ideas for future versions:

* Add more useful Slack commands
* Add custom integrations
* Improve error handling
* Add more interactive Slack features

## Author

Built by Ishaan Jha
