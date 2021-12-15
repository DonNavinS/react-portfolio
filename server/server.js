const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(cors);
app.use("/", router);
app.listen(3001, () => {
  console.log("Server Running!");
});

const transport = {};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready");
  }
});

router.post("/send", (req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  const email = req.body.email;

  const mail = {
    from: name,
    to: "seneviratnanavin@gmail.com",
    subject: `New message from ${name}`,
    content: `
        name: ${name}
        email: ${email}
        message: ${message}
        `,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success");
    }
  });
});
