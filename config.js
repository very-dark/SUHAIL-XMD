const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_52_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NSxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI2LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxLFxuICAgICAgICA3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk5LFxuICAgICAgICA1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM2LFxuICAgICAgICA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgODUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiblN1T3ZHRVQ4cVh3dWVRYXg1VlJVVE5FWXVnNjlPM3V2SWFuTjNsNTFBdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRUpRdG9MSlJUUFN1Q2lrQzItZE1WQVwiLFxuICBcInBob25lSWRcIjogXCJhZTVmOTRkMy1hMmE3LTQ2OTYtOTM0MC0xZDUzZTQ1MmVjMmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc5LFxuICAgICAgMTQ2LFxuICAgICAgMTE5LFxuICAgICAgMjA5LFxuICAgICAgNjMsXG4gICAgICAxNzMsXG4gICAgICA4NixcbiAgICAgIDYyLFxuICAgICAgMTc1LFxuICAgICAgNDksXG4gICAgICAyMjEsXG4gICAgICAxNjgsXG4gICAgICAxMzcsXG4gICAgICAxOTksXG4gICAgICAyOSxcbiAgICAgIDMyLFxuICAgICAgMjA2LFxuICAgICAgMjM2LFxuICAgICAgMTc1LFxuICAgICAgODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ5LFxuICAgICAgNzAsXG4gICAgICAyMCxcbiAgICAgIDIwNCxcbiAgICAgIDIwMSxcbiAgICAgIDIwMyxcbiAgICAgIDQ3LFxuICAgICAgNjIsXG4gICAgICAyMjIsXG4gICAgICAxNjgsXG4gICAgICAxNDMsXG4gICAgICAxODEsXG4gICAgICAxODgsXG4gICAgICAxMDksXG4gICAgICAxNTYsXG4gICAgICA1MCxcbiAgICAgIDIzOSxcbiAgICAgIDE5OSxcbiAgICAgIDM4LFxuICAgICAgNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNzhKWUtGQURcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjI3ODQ1NjA6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLniKrDoMa00bvwnZaXIE/MtkbMtyDwnZGG8J2TjuG5gfCdlaHwnZCixaXEpfCdmanwnZOOXCIsXG4gICAgXCJsaWRcIjogXCI1NzIyMjM2OTQxNTMxNToxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKdUUxYk1HRU9PODg3a0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZ0dGx6eE94bndYOG9xQlNGR2RTT2c1NE9CaXJaM1lMYWE3cnBmR3lEaVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZWVLRVc1WDNIRW5qMUcyT21rdDRaRzRVOUwwdlArVXpXOFVmQmVNY1pSU2N4ckhqRTRHWFplUGpwcHZJRmY1ekxUUzRDbDExY3RoMGRFTHJwRHIzQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWXpjRGtEU1Eramt6RXZPRThnQ1RVeE9rc3l5QUNnUHZWZHphN2l3UFJxQm8wZU4yNXdrbW1JclBZdll6THI2bk5SbXcrVVR1clR5eXRsWTAwN3ZSakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyMjc4NDU2MDoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIwNDIzNDRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
