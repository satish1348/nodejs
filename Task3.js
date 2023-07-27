var nodemailer=require("nodemailer");
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
    user: 'satishkumarskss01@gmail.com',
    pass: 'saydrqspunojytlu'}

})
var mailOption={
    from:'satishkumarskss01@gmail.com',
    to:'pravin.consensus@gmail.com',
    to:'cro59skss@gmail.com',
    subject:'20A21A05I8 NODEMAILER:TASK3',
    text:'THANKS FOR SUPPORTING'
};
transporter.sendMail(mailOption,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent:'+info.response());

    }
});