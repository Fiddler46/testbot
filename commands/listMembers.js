/* IS NOT WORKING */

const projectModel = require("../models/projects.model");

module.exports = {
  name: "list",
  guildOnly: true,
  description: "List of all members participating in the standup",
  execute(message, args){
      let res = "Here are all members participating in the standup:\n";
      
      if(!channel.members.length) {
        message.reply("there does not seem to be any members in the standup. Try `!am @<user> @<optional_user> ...` to add member(s)")
      } else {
        channel.members.forEach(member => {
          res += `<@${member}>\t`;
        });
        message.channel.send(res);
      }
    }
  }
