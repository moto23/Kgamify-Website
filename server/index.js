// filepath: c:\Users\shrey\Downloads\my-react-app-main\src\server\index.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors"; 
import twilio from "twilio";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Verify that environment variables are loaded correctly
console.log("TWILIO_ACCOUNT_SID:", process.env.TWILIO_ACCOUNT_SID);
console.log("TWILIO_AUTH_TOKEN:", process.env.TWILIO_AUTH_TOKEN);
console.log("TWILIO_PHONE_NUMBER:", process.env.TWILIO_PHONE_NUMBER);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

app.post("/api/send-sms", (req, res) => {
  const { phoneNumber } = req.body;
  console.log(`Received request to send SMS to ${phoneNumber}`);
  const message =
    "Here is the link to download the app: https://drive.google.com/file/d/12osJ9m11f_WODHY-onPtVlNXILvJopi-/view?usp=drive_link";

  client.messages
    .create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    })
    .then((message) => {
      console.log(`SMS sent successfully: ${message.sid}`);
      res.send({ success: true });
    })
    .catch((error) => {
      console.error("Error sending SMS:", error);
      res.status(500).send({ error: error.message });
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
