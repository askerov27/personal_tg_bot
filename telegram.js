const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");

// Replace 'YOUR_BOT_TOKEN' with the token you received from BotFather.
const TOKEN = "6478583836:AAFPcYLvyNLl5cdq_kO8WkgmxX8owhXj7TA";
const CAT_API_URL = "https://api.thecatapi.com/v1/images/search";
const DOG_API_URL = "https://api.thedogapi.com/v1/images/search";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\хочу кысю/, async (msg) => {
  const chatId = msg.chat.id;

  try {
    const response = await axios.get(CAT_API_URL);
    const data = response.data;

    if (data && data.length > 0) {
      const imageUrl = data[0].url;
      bot.sendPhoto(chatId, imageUrl);
    } else {
      bot.sendMessage(chatId, "Unable to fetch cat picture. Try again later.");
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    bot.sendMessage(
      chatId,
      "An error occurred while fetching the cat picture."
    );
  }
});
bot.onText(/\давай собачку/, async (msg) => {
  const chatId = msg.chat.id;

  try {
    const response = await axios.get(DOG_API_URL);
    const data = response.data;

    if (data && data.length > 0) {
      const imageUrl = data[0].url;
      bot.sendPhoto(chatId, imageUrl);
    } else {
      bot.sendMessage(chatId, "Unable to fetch cat picture. Try again later.");
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    bot.sendMessage(
      chatId,
      "An error occurred while fetching the cat picture."
    );
  }
});
