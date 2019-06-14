// var path = require('path')
// var webpack = require('webpack')
var express = require('express')
var nodemailer = require('nodemailer')
var bodyParser = require('body-parser')
// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var compression = require('compression');

var app = express()
var apiRouter = express.Router()
if (process.env.NODE_ENV == undefined || process.env.NODE_ENV === 'development'){
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackConfig = require('./webpack.config');
  const webpack = require('webpack');

  var complier = webpack(webpackConfig);

  app.use(webpackDevMiddleware(complier,{

  }));

}
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
apiRouter.post('/email',function(req,res){
  res.send('respond with a resource');
  console.info('req,' , req.body.name,req.body.email)
  var text = "姓名是"+req.body.name+"邮箱是"+req.body.email
  if(req.body.name&&req.body.email){
    // res.json({
    //   iRet:1,
    //   info:"ok"
    // })
    var transporter = nodemailer.createTransport({
      service:"qq",
      port:587,
      secure:false,
      auth: {
        user: '1106469850@qq.com',
        pass: 'strihgvnvcmefjhd'
      }
    })
    var mailOption = {
      to: req.body.email,
      from: "1106469850@qq.com",
      subject: 'nodemailer发送邮件',
      text:text,
    }
    transporter.sendMail(mailOption,(error,info)=>{
      if(error){
        console.info(error);
        return 
      }
      console.info('邮件发送: ' + info.response);
      transporter.close();
    })
  } else {
    res.json({
        iRet: -1,
        info: 'error',
    });
    return;
  }
})
apiRouter.get("/get",function(req,res,next){
  var text = "姓名是"+req.query.name+"邮箱是"+req.query.email
  console.info(text)
  res.send(text);

})

// app.use('/', indexRouter)
app.use('/api', apiRouter)
app.listen(8081, function() {
  console.info('复制打开浏览器', 'localhost:8081')
})