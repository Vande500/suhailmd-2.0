const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+237621755333";




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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_52_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjksXG4gICAgICAgIDk1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM4LFxuICAgICAgICA3LFxuICAgICAgICAxNCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICA3LFxuICAgICAgICA4MyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTksXG4gICAgICAgIDczLFxuICAgICAgICAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDksXG4gICAgICAgIDcsXG4gICAgICAgIDk4LFxuICAgICAgICA2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMsXG4gICAgICAgIDExMixcbiAgICAgICAgNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MixcbiAgICAgICAgODQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0LFxuICAgICAgICA3NyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTExLFxuICAgICAgICA5NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk5LFxuICAgICAgICA2NixcbiAgICAgICAgNTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDMwLFxuICAgICAgICAyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJla1Bzb2lpUmZzSml6T3h5QVlxSk9pWFh1aEtVVUlZQm9NSkFkdStjRCtnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzYyMTc1NTMzM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0EzNjlFRDNEOTYwQTI4RkMxMzBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyMjUxMTQxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdpUm1OQ3c1UlNPY3habVpHSFlwbkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTNlYzlmNzItNzkxMS00ZWJlLWE4MDQtZWNkMTYxZmExMmNiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgMTgsXG4gICAgICA4NixcbiAgICAgIDI0NSxcbiAgICAgIDExNyxcbiAgICAgIDksXG4gICAgICAxOTQsXG4gICAgICAxMzIsXG4gICAgICAxMzksXG4gICAgICAyMTEsXG4gICAgICAzNSxcbiAgICAgIDQzLFxuICAgICAgMTMxLFxuICAgICAgMTU3LFxuICAgICAgMjU0LFxuICAgICAgMTA0LFxuICAgICAgMTg1LFxuICAgICAgMTg4LFxuICAgICAgMjE0LFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgMzgsXG4gICAgICAyMjQsXG4gICAgICAxMTIsXG4gICAgICA1MCxcbiAgICAgIDg2LFxuICAgICAgNzYsXG4gICAgICAxODUsXG4gICAgICAxNyxcbiAgICAgIDIzOCxcbiAgICAgIDE4MCxcbiAgICAgIDYxLFxuICAgICAgMTM0LFxuICAgICAgMjM1LFxuICAgICAgODEsXG4gICAgICAxMzYsXG4gICAgICAxODgsXG4gICAgICA0NSxcbiAgICAgIDE5OSxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjk4UU02U1M4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2MjE3NTUzMzM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNvYWNoIFZhbmRlXCIsXG4gICAgXCJsaWRcIjogXCIxNDM4NjQ3NDQ2NTY5OTc6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNNkF2UDBLRVB1YmdMb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhwejBMN3RaNmxweEZTMDNBdGZHMmx0WC85NU9US05UZnJEL0RCcHNjbFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL1ZENEpxRGtmc3dUREpyRlM5VUJPK1VLSVBGKzNLR2lyZDlncWNRT29zeDloMlc5YitwNGpWelZlMlNZUFFPM3RsS3Z6VTlFRkF2RXFBWktXNTJKQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiemUvUjMvRDVyQm9iZ2xXLzlNbEplMFpyaU5yVXA3R3BiMFZLRVJCTXA4K09YTTUvMS9HdXk0VFFIMDE5V0t3WjRIUlE5Um9yMHJ4Q1haRGNGbVdwaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjIxNzU1MzMzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjI1MTEzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhua1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSG5rLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaXZ6RnVZRzBBVU80QjhJb200RENmbWhkc0ZUWUpTMDdUS3NGOGJXcTR0dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyOTQ3NDgxNjc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIyNTExMzczOTNcIn0iCn0="  // PUT your SESSION_ID 


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
