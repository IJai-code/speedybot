require("dotenv").config();

const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/speedybot-ping", async ({ ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/speedybot-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/speedybot-ping - Check bot latency
/speedybot-catfact - Get a cat fact
/speedybot-joke - Get a random joke
/speedybot-advice - Get a random piece of advice`
  });
});

app.command("/speedybot-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    console.log(err);
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

app.command("/speedybot-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text:
`${response.data.setup}

${response.data.punchline}`
    });
  } catch (err) {
    console.log(err);
    await respond({ text: "Failed to fetch a joke." });
  }
});

app.command("/speedybot-advice", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://api.adviceslip.com/advice");
    await respond({
      text: `Advice:\n${response.data.slip.advice}`
    });
  } catch (err) {
    console.log(err);
    await respond({ text: "Failed to fetch advice." });
  }
});

(async () => {
  try {
    await app.start();
    console.log("bot is running!");
  } catch (error) {
    console.error(error);
  }
})();