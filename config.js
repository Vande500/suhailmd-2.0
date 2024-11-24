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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_27_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjksXG4gICAgICAgIDk2LFxuICAgICAgICA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMixcbiAgICAgICAgNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODUsXG4gICAgICAgIDc0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAwLFxuICAgICAgICA5NixcbiAgICAgICAgMTExLFxuICAgICAgICA3NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDMxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMzLFxuICAgICAgICA5OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM0LFxuICAgICAgICA4NixcbiAgICAgICAgMjI0LFxuICAgICAgICA1OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAwLFxuICAgICAgICAyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDYsXG4gICAgICAgIDU3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODksXG4gICAgICAgIDk2LFxuICAgICAgICAxODksXG4gICAgICAgIDYxLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnaFZUbTJXSE1rdUZjMkpCTFNkV3NYemkyS2dDOUVHN043eGVCL1dLdTJVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIMXk1aFR0Y1F3dVVWNXV0YUZPWUlRXCIsXG4gIFwicGhvbmVJZFwiOiBcImJhNmIxZjVmLWFjYWEtNDhjMy05MGIyLTA2Y2VhNGQxOWVmZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDc2LFxuICAgICAgNTgsXG4gICAgICAyMDksXG4gICAgICAxNDksXG4gICAgICA3OCxcbiAgICAgIDgzLFxuICAgICAgMTMsXG4gICAgICA3OCxcbiAgICAgIDIwNSxcbiAgICAgIDIxOSxcbiAgICAgIDE5NSxcbiAgICAgIDI0NixcbiAgICAgIDEwMyxcbiAgICAgIDI0MyxcbiAgICAgIDc1LFxuICAgICAgMTI4LFxuICAgICAgNDQsXG4gICAgICAxNzIsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgMTM3LFxuICAgICAgMTUxLFxuICAgICAgMTAwLFxuICAgICAgMTEwLFxuICAgICAgNjQsXG4gICAgICA5OCxcbiAgICAgIDMyLFxuICAgICAgMjIwLFxuICAgICAgMjI5LFxuICAgICAgMTExLFxuICAgICAgOTYsXG4gICAgICAxNCxcbiAgICAgIDk5LFxuICAgICAgMzEsXG4gICAgICA5NyxcbiAgICAgIDEyMCxcbiAgICAgIDIzLFxuICAgICAgODQsXG4gICAgICAzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUVFY5WVBQSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjIxNzU1MzMzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDb2FjaCBWYW5kZVwiLFxuICAgIFwibGlkXCI6IFwiMTQzODY0NzQ0NjU2OTk3OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTZBdlAwS0VJMy9pN29HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4cHowTDd0WjZscHhGUzAzQXRmRzJsdFgvOTVPVEtOVGZyRC9EQnBzY2xZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJRREpVQlJaNUkrVkdIQ2ozL1Jxc0lVNHl1TlVFbkJibEdReE81alJoSmNhd0lxaEdoeGpsNnFrWWRjdjNwZFhSVVdid1JMMXFjd2ZIUnFTK3psYkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk0zSlQrUGlWSUJOL09DSXVOWldOU1FmWStsa1JkN0wwTlAyWTRMQjY3bEsydEZXSWZLSEloVnZZNHZWWGZMNjhPYTJkZXFtdFovZSsyenlvTnUwQ2pRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzYyMTc1NTMzMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI0NDQwNDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIbmtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhuay5qc29uIjogIntcImtleURhdGFcIjpcIml2ekZ1WUcwQVVPNEI4SW9tNERDZm1oZHNGVFlKUzA3VEtzRjhiV3E0dHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjk0NzQ4MTY3OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyMjUxMTM3MzkzXCJ9Igp9"  // PUT your SESSION_ID 


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
