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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+237680396003";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_41_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDkyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExLFxuICAgICAgICA4NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5LFxuICAgICAgICAxODksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDAsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMixcbiAgICAgICAgNTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MixcbiAgICAgICAgMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDgzLFxuICAgICAgICA2NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgODksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWlo0ckxpVnk0OEhqeVN2TnQ5dGZlYlowaFBPVjJPQU40NjZreGVnVGlRdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSVU1NHVva2tSRnV4alVXU3dPdVR2d1wiLFxuICBcInBob25lSWRcIjogXCIzYWFlOWE2MS0xZDc4LTQyNTktYmU1Ni0wZDM3ZDc5YmZlOGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI2LFxuICAgICAgMTI5LFxuICAgICAgMjIsXG4gICAgICAxMixcbiAgICAgIDI0MSxcbiAgICAgIDI0NSxcbiAgICAgIDc0LFxuICAgICAgMjIzLFxuICAgICAgMTM1LFxuICAgICAgNTUsXG4gICAgICAxOTQsXG4gICAgICA1LFxuICAgICAgMCxcbiAgICAgIDgxLFxuICAgICAgMTEyLFxuICAgICAgNjMsXG4gICAgICAxNTUsXG4gICAgICAxODEsXG4gICAgICAzNyxcbiAgICAgIDI0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDEwNyxcbiAgICAgIDIzOCxcbiAgICAgIDI0NixcbiAgICAgIDMsXG4gICAgICAxNTIsXG4gICAgICA0NSxcbiAgICAgIDI0MyxcbiAgICAgIDIxMSxcbiAgICAgIDgxLFxuICAgICAgNzksXG4gICAgICAxMjEsXG4gICAgICA1LFxuICAgICAgMTg3LFxuICAgICAgMTcsXG4gICAgICAxMzcsXG4gICAgICAzMixcbiAgICAgIDEzOSxcbiAgICAgIDIzMyxcbiAgICAgIDE2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTSDdFWVRaM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjgwMzk2MDAzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDIxNzI0MTAxMzA1ODk6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTdhaExvQ0VOblQxYm9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6MGc2Mkxra3ZHaUdOdERLSS8rNDNxYkNRMkdXUGJsclJISGZBRWczaUJrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5CSUprYUdyaHhSM2hKdHgxcHl1YUhKRktENDFnWlFaUmdkbCtYTjFRNkszVzV2aSthRHBjMmpwTTkyaFIwbXVINlNLL3g0enJPQTJydkF1c3JOcERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVlS012Y2tGOFU2ZEREcndCcU1WWFhHQjYwMnF4T3FiVXBHZjEzTlRVYWJDTkZUTkFDd1d5U1RGTTg0UFZUaUdXNVZzMEIvbisyZ3NHZkluTHk0aGhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY4MDM5NjAwMzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzY1MDkwOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9NZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT01mLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV09YcHQ2UXE2N29LS29oajVzb09SdU92MkMrS0hBbUhIMGIvVVV1MGp4Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NTg1ODI4NjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzY1MDcxNDIyNFwifSIKfQ=="  // PUT your SESSION_ID 


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
