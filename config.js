const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="kanjumatakundacharles@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/TAKX-OFC/MUNYORO-BOT-";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagC7BABadmV7PRRs72Y";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagC7BABadmV7PRRs72Y" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d86ad8e65e8408dfb1e0c.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝚃𝙰𝙺𝚇-𝙾𝙵𝙲" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "263714773898";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263785192250";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_59_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDcyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MixcbiAgICAgICAgMTczLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM4LFxuICAgICAgICA4OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDExLFxuICAgICAgICA5MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDk4LFxuICAgICAgICA4OCxcbiAgICAgICAgNSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDI1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM2LFxuICAgICAgICAzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODYsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU3LFxuICAgICAgICA4MixcbiAgICAgICAgMTMxLFxuICAgICAgICA4LFxuICAgICAgICA2NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImlEWXAxMUJKbHcxNUEwdVBvUldEWS9KbG42aTBZWStzbmtyTHppN3hvUjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzE0NzczODk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MzZBQUEyRDExMzNBQkZCRTI0NjhBMzI2M0FENTk4MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzMjQ3NDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLTlmZ0g3VnNRQXVWN2VBS0JfZ3hPQVwiLFxuICBcInBob25lSWRcIjogXCI2ZDc3MDdmNi1kZTA5LTRmYjgtODRkYS1hNjBkYWVkMzZiODBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgMTg1LFxuICAgICAgMTEwLFxuICAgICAgMTM1LFxuICAgICAgMTQ2LFxuICAgICAgMTgsXG4gICAgICA3NSxcbiAgICAgIDIzOCxcbiAgICAgIDM2LFxuICAgICAgMTM2LFxuICAgICAgMTg0LFxuICAgICAgNjEsXG4gICAgICAxNDYsXG4gICAgICAxMTQsXG4gICAgICAyNTEsXG4gICAgICAxNTYsXG4gICAgICAxMzksXG4gICAgICAzOCxcbiAgICAgIDIyNixcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNSxcbiAgICAgIDExNyxcbiAgICAgIDIxMCxcbiAgICAgIDQwLFxuICAgICAgMTM0LFxuICAgICAgNDYsXG4gICAgICAxNDMsXG4gICAgICA3MSxcbiAgICAgIDE4NixcbiAgICAgIDEzOCxcbiAgICAgIDY1LFxuICAgICAgMjEyLFxuICAgICAgNzksXG4gICAgICAxNDIsXG4gICAgICAyMTIsXG4gICAgICAxNDMsXG4gICAgICA2OSxcbiAgICAgIDE5NSxcbiAgICAgIDg2LFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzdMOVQzVzNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNDc3Mzg5ODo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTc2MzgzOTQ3OTgxMjA6N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLJqs2l4bSbza1z4bekIOG0jc2r4bSHzaQg4p2l4oOd8J+Hv/Cfh7zil4jwnZSx8J2UnvCdlKjwnZSy8J2Uq/CdlKHwnZSeXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3ZoaFpJSEVQK2txTFFHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1aGhzK1M2eUR6VmkrMDgyQlN1ZnRlMGE0ZTlzUjBhMWFnNnhxRDh1TnhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNUUERRR0NTWTRwejU4NW1Sc3V5U3FhK3dqWUk5cDQzb21kUkN5L1JoOGdhZXBsZFVHcnpnM3NJREdsSmR0dTJyelpoR0JUdyt5bC9WdTkzRHVnd0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhyK0E1SndzMS9rd0hJaVlNSzVuM1ZGeFJaZWpKNDhzaThvZkp1eDV3NHk4TlR4NnV1Ymx0VURFcHlZSFJsOUdYSFdIbnJtSHlQeExXbHErdGNIRkRnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNDc3Mzg5ODo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzI0NzM4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSmJlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKYmUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzTFMwMjh0ZDcwOFNCWitoaGtjcGhBcmRrbGVTYUZEWjlYYTFVL3JFSXVZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MTY4OTEzNzEsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 𝚃𝙰𝙺𝚇-𝙾𝙵𝙲』```", //*『𝚃𝙰𝙺𝚇-𝙾𝙵𝙲』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝚃𝙰𝙺𝚇-𝙾𝙵𝙲",
  ownername:process.env.OWNER_NAME|| "𝚃𝙰𝙺𝚇-𝙾𝙵𝙲",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
  //userImages:process.env.USER_IMAGES|| "https://telegra.ph/file/d86ad8e65e8408dfb1e0c.jpg",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
