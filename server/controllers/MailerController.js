const nodemailer = require('nodemailer');
const { admin } = require("../database/models/admin");
const { where } = require('sequelize');

const mailer = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'rafikmhadhbi@yahoo.fr',
    pass: 'pvlzkdjalmylxcii',
  },
});

module.exports = {
  sendMail: (req, res) => {
    const { password } = req.body;

    const mail = {
      from: 'rafikmhadhbi@yahoo.fr',
      to: "rafikmhadhbi01@gmail.com",
      subject: 'Admin Password',
      html: `${password}`
    };

    mailer.sendMail(mail, (err, data) => {
      if (err) {
        res.status(500).json({ message: 'Error sending email', err: err });
      } else {
        admin.update({ password: password }, { where: { id: 1 } })
          .then(result => {
            console.log("done")
          })
          .catch(err => res.status(500).json(err));
        
        res.status(200).json({ message: ' email sent successfully' });
      }
    });
  },
  login:(req,res)=>{
    const {username,password}=req.body
    admin.find({},{where:{
        username:username,
        password:password
    }})
    .then(ress=>res.status(200).json("success"))
    .catch(err => res.status(500).json(err));
        
   
  }
};
