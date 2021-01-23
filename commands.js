
const gif = require('./commands/gif.js');
const choochoo = require('./commands/choochoo.js');

const commands = {choochoo, gif}

module.exports = function(msg){
  if(msg.channel.id == '776853485345832971'){

    let tokens = msg.content.split(' ');
    let command = tokens.shift();
    if(command.charAt(0) === '!'){
      command = command.substring(1);
      commands[command](msg,tokens);
    }
  }
}
