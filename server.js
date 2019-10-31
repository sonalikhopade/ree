var express=require('express');
var nodemailer = require("nodemailer");
var app=express();
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
app.use(express.static((__dirname +'/dist/reebnew')));
app.get('/*',(req,res)=> res.sendFile(path.join(__dirname)));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.hostinger.in');
var transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.in',
  auth: {
         user: 'no-reply@reeb.in',
         pass: 'Reeb@123'
     },
     port: 587,
  secure: false,
 });
//  app.post("/sendMail", (req, res) => {
//   console.log(req.body);
//  });


app.post('/sendMail', (req, res) => {
  console.log(this.formdata);
  // var firstName = req.body.firstName;
  // var email = req.body.email;
  // var phoneNo = req.body.phoneNo;
  // var lastName = req.body.lastName;
  console.log(res.body);
  req.body.firstName = `${req.body.firstName} from Nodejs`;
  res.send(res.body);
let transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.in',
  secure: false,
  port: 587 ,
  auth: {
         user: 'no-reply@reeb.in',
         pass: 'Reeb@123'
     },
  tls : {
  rejectUnauthorized : false
} 
});
var body = req.body;
let mailOptions = {
  from: body.email,
  to: 'info@reeb.in',
  subject: "Test Mail",
  html:
    "Hello,\n\n" +
    "Contact us form details - \n\n" +
    "Name - " + body.firstName + "\n\n" +
    "Email - " + body.email + "\n\n" +
    "Phone No -  " + body.phoneNo + "\n\n" +
    "Message - " + body.lastName + "\n\n"
   
};
transporter.sendMail(mailOptions, (error,info)=> {
  if (error) {
   return console.log(error);
  }
 
  console.log("Mail has been sent.");
  console.log(info);
});

});

app.post("/sendemail", (req, res) => {
 
  
});
app.listen(3000,function(){
  console.log("Express Started on Port 3000");
});