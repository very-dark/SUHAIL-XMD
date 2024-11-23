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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_14_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA5MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDg4LFxuICAgICAgICA2MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwLFxuICAgICAgICA1OSxcbiAgICAgICAgODksXG4gICAgICAgIDQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUwLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcyLFxuICAgICAgICA0MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMSxcbiAgICAgICAgNixcbiAgICAgICAgMzcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDksXG4gICAgICAgIDg0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg2LFxuICAgICAgICAzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDksXG4gICAgICAgIDg2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDM3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODksXG4gICAgICAgIDc0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg0LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibm9MZHlmZFhkN253RVdEbW5pc1ZEMmxhZXRDNTgyYzNuYS9hWlZRQUxQTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWGE1cmRxamxRUWUwVDlxZUlHNGFVUVwiLFxuICBcInBob25lSWRcIjogXCI2MDFjNjg5Yi05MjlkLTRhYjItYTZlZi1jNDAwYWZmM2ZkZWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgNTksXG4gICAgICAxMixcbiAgICAgIDE2OSxcbiAgICAgIDE3NyxcbiAgICAgIDg2LFxuICAgICAgMzcsXG4gICAgICAyMTUsXG4gICAgICAxMDUsXG4gICAgICA4MSxcbiAgICAgIDExNSxcbiAgICAgIDI1LFxuICAgICAgMjMzLFxuICAgICAgNjgsXG4gICAgICAyNDMsXG4gICAgICAxODMsXG4gICAgICA2OSxcbiAgICAgIDE5LFxuICAgICAgMTg2LFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDM2LFxuICAgICAgMjM1LFxuICAgICAgMTI0LFxuICAgICAgMTMxLFxuICAgICAgNTcsXG4gICAgICAyMDEsXG4gICAgICAyMDYsXG4gICAgICA2LFxuICAgICAgNTIsXG4gICAgICA1MCxcbiAgICAgIDE3LFxuICAgICAgMTU5LFxuICAgICAgMTc0LFxuICAgICAgMTksXG4gICAgICA1NSxcbiAgICAgIDM3LFxuICAgICAgODEsXG4gICAgICA2NSxcbiAgICAgIDEzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2WEREOUs3OVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA1NzI2Mjg3ODo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjg2MDkyMTMzOTUwNDQ6NjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEgxOXVVRUVKMm5pYm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNV2Q5OXJndlZZTndSczlnRWd1VW1CNzBQbmQxU0RmVkNxcE5jeFVzekFnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBYeEJ6cjFzZlVZbEFUakNSWWErK29RWlg1dUhGT09uSVFjM1pPSk8yRnYyT004amJrTnhza0U3ODJRblBKT0gyK1U4Y3FxcVZwZW9wNnUwWnFFV0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZkazl5K2ZqWG9zWWVXazFwTTIwOFcvUXRiSmV1TWIwOUxnL1dLTy9hSFNYWU9WeHRxU21nMlZ3R0c1c2pLd29NVmZaL0l1aEVuSllkd0poSmNDcWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNTcyNjI4Nzg6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNDAwMDMzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
