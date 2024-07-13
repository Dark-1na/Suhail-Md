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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2347042294253";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347042294253,";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_20_23_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMCxcbiAgICAgICAgOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNjEsXG4gICAgICAgIDM3LFxuICAgICAgICA4NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDY0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAzNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExLFxuICAgICAgICAyNDksXG4gICAgICAgIDk2LFxuICAgICAgICA1LFxuICAgICAgICAxNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgODksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTczLFxuICAgICAgICA0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDU3LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDY1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAwLFxuICAgICAgICAxODksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3cEh2OTRaWXoyZVFVWDFMWlliOTRWQUJVemp4Ukd6NGVMazdvZHJFNFJ3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGZUZOMkZUS1JWRzJlMFlLY09QUXRRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVjZDY0MTg0LTY2NzYtNDM5NC05MTUyLTE1OGZmYjUzNzQwMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICAxMjEsXG4gICAgICA0OSxcbiAgICAgIDEwOSxcbiAgICAgIDIwNyxcbiAgICAgIDE4NixcbiAgICAgIDExNixcbiAgICAgIDExOSxcbiAgICAgIDM0LFxuICAgICAgMTc0LFxuICAgICAgMTc5LFxuICAgICAgOTAsXG4gICAgICAxNDQsXG4gICAgICAxMSxcbiAgICAgIDI1MSxcbiAgICAgIDE5OCxcbiAgICAgIDc0LFxuICAgICAgMTExLFxuICAgICAgMzgsXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NCxcbiAgICAgIDEzMSxcbiAgICAgIDE3MixcbiAgICAgIDEwOSxcbiAgICAgIDEyNyxcbiAgICAgIDEyLFxuICAgICAgMTU3LFxuICAgICAgNyxcbiAgICAgIDk1LFxuICAgICAgMCxcbiAgICAgIDE4OSxcbiAgICAgIDcxLFxuICAgICAgMjI3LFxuICAgICAgMTUsXG4gICAgICAyMCxcbiAgICAgIDI1LFxuICAgICAgMTU1LFxuICAgICAgMjE1LFxuICAgICAgMTczLFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUU45QTJTWEZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDIyOTQyNTM6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2Mzk2OTA5MjY5ODI5NToyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNYmY4ak1Rc01UTHRBWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9uQS9NdDU4ZXlESVhyWkl3am5HWTZoM1VpaUtwNjdqc2hxczNHa1RIbm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRjlJVExreEMxbXBPaFdlZkRuN09Kd0ZiUENGMnN2aGJ1c3l5U1BVVytxQlZVdmdxczF1TjVBT0JlZFVObUVrOVNHUXVZWHBmdW0rZ2FnQjNSYTBFRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaTdFQnFrZllUeFZZckNBbUxLSEcvLzVsU3lWdkhpOUxrOUk2R3NGbFB5bjR5Mnl5MUdKdnFFUzV3NFluZmhKNHdKRDJLek1kMXhhbXFaU2FoTnl2aEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MjI5NDI1MzoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDkwMjE5NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=" // PUT your SESSION_ID

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
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
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
