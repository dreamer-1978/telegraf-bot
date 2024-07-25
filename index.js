import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import express from 'express'

const bot = new Telegraf(process.env.BOT_TOKEN);

const PORT = 3000
const URL = "https://telegraf-bot-eta.vercel.app";
const app = express();

app.use(await bot.createWebhook({ domain: URL }))

app.get('/', (req, res) => {
    res.send('...Server is running...')
})

bot.command('text', (ctx) => {
    ctx.reply('Hello World')
})



app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`)
})
