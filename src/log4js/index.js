import log4js from 'log4js';
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
export const logger = function(name){
  var logger = log4js.getLogger(name ? name : 'normal');
  return logger;
}


export {
  log4js
}
