module.exports.config = {
    name: "console",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "D-Jukie",
    description: "",
    commandCategory: "Admin",
    usages: "",
    cooldowns: 5,
    dependencies: {
    }
};

module.exports.handleEvent = async({ event, Users }) => {
  const chalk = require('chalk');
  const { senderID, threadID, body } = event;
  const rdcl = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright', 'cyan', 'white'];
	const color = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]]
        color2 = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]]
        color3 = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]]
        color4 = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]]
        color5 = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]]
        color6 = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]]
        color7 = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]]
        color8 = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]]
// convert and mod by Hidden <3
    const moment = require("moment-timezone");
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    const messData = body;
    var nameBox = global.data.threadInfo.get(event.threadID).threadName || "Tên không tồn tại";
     var nameUser = await Users.getNameUser(event.senderID);
return console.log(color(' Box:'), color2(`${nameBox}`), color3(`||`), color4(`User:`), color5(`${nameUser}:`), color6(`${messData}`), color7(`||`), color8(`${timeNow}`) );
}
module.exports.run = async({ api, event, args }) => {
    api.sendMessage(`Console đang chạy...`, event.threadID, event.messageID)
}
