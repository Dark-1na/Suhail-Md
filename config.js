const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347042294253";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2347042294253";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347042294253";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_57_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNixcbiAgICAgICAgMTEzLFxuICAgICAgICA1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUzLFxuICAgICAgICA5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDg2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTczLFxuICAgICAgICA3NixcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc2LFxuICAgICAgICA4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU1LFxuICAgICAgICA1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDY2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM2LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDgwLFxuICAgICAgICA0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTjZvd2hhYklWZE5WUThUU2JlNTFMT0JXMjluSWk0UzljK1dDRXJpL1g5ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid1hsY1pGV2FTbUtETVRaWUxuYlAwQVwiLFxuICBcInBob25lSWRcIjogXCIwZDZhYjc3Yy1kZTI4LTQ2MTYtYjI5NS02MTk2OTgxZjY5OWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgMjMsXG4gICAgICA1OSxcbiAgICAgIDIzMSxcbiAgICAgIDI0MCxcbiAgICAgIDEyNyxcbiAgICAgIDUzLFxuICAgICAgMTU1LFxuICAgICAgMTAyLFxuICAgICAgMjA2LFxuICAgICAgMTM2LFxuICAgICAgMTk5LFxuICAgICAgMTMyLFxuICAgICAgMTQ0LFxuICAgICAgMTYzLFxuICAgICAgMjU1LFxuICAgICAgMixcbiAgICAgIDIxMixcbiAgICAgIDIzNSxcbiAgICAgIDE4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODIsXG4gICAgICA1OCxcbiAgICAgIDQxLFxuICAgICAgNTcsXG4gICAgICAxNTMsXG4gICAgICA1NCxcbiAgICAgIDE3NCxcbiAgICAgIDUwLFxuICAgICAgMjIsXG4gICAgICAxNjksXG4gICAgICA5MSxcbiAgICAgIDE1NixcbiAgICAgIDIxNSxcbiAgICAgIDIwNyxcbiAgICAgIDE2NixcbiAgICAgIDEyMyxcbiAgICAgIDE4MyxcbiAgICAgIDE4NSxcbiAgICAgIDQ2LFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVhLTDFNVFhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDIyOTQyNTM6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2Mzk2OTA5MjY5ODI5NToyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNYmY4ak1RK2Z1U3RBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9uQS9NdDU4ZXlESVhyWkl3am5HWTZoM1VpaUtwNjdqc2hxczNHa1RIbm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL3lLN2w3Rmh6SkVNYWlQdFZpWnA4YnBUU281M3JiWVdFSzVEWENkblluOTlsNE1ETUtDNjF0MkRxdlNVbEczS2pmb29mMVhSK2dQQ0xWSnlpKysvRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUGtKcW9rU2l0bkxWck0yUzQxTzVJZklaV1cxUjJvSUJQeU9DN3k2cmphQWViRk9FdGwwY2o0M1lxNlJubm12c096bjN5VDlHMWZwckFYd1ZBVmRxRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MjI5NDI1MzoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTk3NTQyMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Domino",
  ownername:process.env.OWNER_NAME|| "Domino",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
