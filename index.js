const express =require('express')
const app =express();
const Discord = require('discord.js');
let port = process.env.PORT || 8000;
// Create a new client instance
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const prefix =`?n`;

bot.on('ready',()=>{
    console.log("the bot is ready");
})

// bot.on('message',(msg)=>{
// console.log(msg);
// })

// bot.on('message',(msg)=>{
// if(msg.content=="hello"){
//     msg.channel.send("hi")
// }
// })

bot.on("message",(msga)=>{
if(msga.content.startsWith(`${prefix} m`)){
const msga_lenght =msga.content.length;
const msga_splited=msga.content.slice(5,msga_lenght)
var msga_num =eval(msga_splited);

   msga.reply(msga_num);
}

})
bot.on('message',(m1)=>{
    if(m1.content.startsWith(`${prefix} help`)){
       m1.reply("-  ?n m \n -  ?n help")
    }
})

bot.login(token);

app.listen(port,()=>{
    console.log("server online")
})
