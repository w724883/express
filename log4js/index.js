var log4js = require('log4js');
log4js.configure({
  appenders: [
    { type: 'console' },
    {
      type: 'dateFile', 
      filename: 'logs/', 
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern : true,
      maxLogSize: 1024,
      backups:4,
      // category: ['normal']
    }
  ],
  replaceConsole: true
});
exports.logger = function(name){
  var logger = log4js.getLogger(name ? name : 'normal');
  return logger;
}
exports.log4js = log4js;
