module.exports = function(env) {
  console.log(env, ' : env setting');
  console.log(env.client, ' : env cleint');
  console.log(env.server, ' : env server');
  if(env.client) {
    return require('./webpack.client.js');
  } else if(env.server) {
    return require('./webpack.server.js');
  }
};
