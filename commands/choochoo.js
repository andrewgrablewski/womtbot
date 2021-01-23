const replies = [
  '🚂🌈💕', 'Choo Choo', 'Ding 🔔','Never forget this dot'
]

module.exports = function(msg,args){
  const index = Math.floor(Math.random() * replies.length);
  msg.channel.send(replies[index]);
}
