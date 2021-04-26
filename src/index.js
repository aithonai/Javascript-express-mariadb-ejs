const app = require('./config/server');
require('./app/routes/news.js')(app);

// server starting
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})