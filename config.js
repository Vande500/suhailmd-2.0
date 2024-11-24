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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237680396003";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_30_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMzLFxuICAgICAgICA4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDYxLFxuICAgICAgICA3OSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDYzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDkzLFxuICAgICAgICA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDk1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNSxcbiAgICAgICAgMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMixcbiAgICAgICAgMjIzLFxuICAgICAgICA3MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxODksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK3V3NWR1SEtyVlRxUUZRZmd2QmI4ZTl0R09YZHdRUm5VQjN5U1BPdlNsdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS0ExUnFHbjZUQW1TdmtmVHEyZHB0UVwiLFxuICBcInBob25lSWRcIjogXCI0OTA1ZTI0Yi0zMjU1LTQ3ZDAtYjVmNi0zZjU4MjZlZTc5ZTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDIsXG4gICAgICAyMDcsXG4gICAgICA5NixcbiAgICAgIDIzNyxcbiAgICAgIDE2MixcbiAgICAgIDYyLFxuICAgICAgMjAxLFxuICAgICAgMzksXG4gICAgICAxNyxcbiAgICAgIDE3MCxcbiAgICAgIDQwLFxuICAgICAgMTE0LFxuICAgICAgMTczLFxuICAgICAgMjA2LFxuICAgICAgMTY0LFxuICAgICAgMTM4LFxuICAgICAgMTE0LFxuICAgICAgOTAsXG4gICAgICAyMjQsXG4gICAgICAxODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAxNjIsXG4gICAgICAyMSxcbiAgICAgIDgzLFxuICAgICAgMTExLFxuICAgICAgMTcxLFxuICAgICAgMjM2LFxuICAgICAgMTUxLFxuICAgICAgMjEzLFxuICAgICAgMTUsXG4gICAgICAxMDksXG4gICAgICA3OCxcbiAgICAgIDQyLFxuICAgICAgMjEyLFxuICAgICAgMjUsXG4gICAgICAyMDYsXG4gICAgICAxMixcbiAgICAgIDIxNyxcbiAgICAgIDksXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVhKV0NEMldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY4MDM5NjAwMzoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQyMTcyNDEwMTMwNTg5OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00zYWhMb0NFT1dpcHJrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiejBnNjJMa2t2R2lHTnRES0kvKzQzcWJDUTJHV1BibHJSSEhmQUVnM2lCaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlaUhuUDNtNmtzSlFZUDczZldKcFdQakhtbFI5U05rNGlKQmdWWFF5ZS9rTmh2aGh0cFRzOFd3eGgrdURISTRIQzFCMktnRWh3RzJTaW4rOXVHaUlBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYbW8rWnYzS0R6WFJOdlJ6TUpxTW5zZE1McDJmR3dhcjJObVpMUmNPV2t5VGQzSVNaejd2dEUxWXJxUXUvaXNybC84QmVHdGR4M0JOQ3NQaVZOT1JDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2ODAzOTYwMDM6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA3Nzc0NDlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
