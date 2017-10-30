var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname+'/app')).listen(8035, function(){
    console.log('Server running on 8035...');
});