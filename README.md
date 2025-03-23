```markdown
# BulkSmsApp  

A simple bulk SMS sending application using **Node.js** and **Twilio API**. This app allows users to send SMS messages to multiple recipients efficiently.  

## Features  

- Send SMS messages in bulk  
- Uses Twilio API for reliable message delivery  
- Supports environment variables for API credentials  
- Simple and easy-to-use Node.js backend  

## Prerequisites  

Before running the application, ensure you have:  

- **Node.js** installed (version 14+ recommended)  
- **Twilio Account** with API credentials (SID & Auth Token)  
- **Twilio Phone Number** for sending messages  

## Installation  

```sh
git clone https://github.com/sandeepkrmehta/BulkSmsApp.git
cd BulkSmsApp
npm install
```

## Configuration  

Create a `.env` file and add your Twilio credentials:  

```plaintext
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

## Usage  

1. Prepare a list of phone numbers in `contacts.json`:  
   
   ```json
   {
     "numbers": ["+1234567890", "+1987654321"]
   }
   ```  

2. Run the script to send bulk SMS:  

   ```sh
   node sendSms.js
   ```

3. The script will send messages to all numbers listed in `contacts.json`.  

## API Endpoints (Optional)  

If you want to extend the app with an API, you can set up Express.js:  

- **POST /send** – Send bulk messages using JSON body  

   ```json
   {
     "message": "Hello from BulkSmsApp!",
     "numbers": ["+1234567890", "+1987654321"]
   }
   ```

## Technologies Used  

- **Node.js**  
- **Twilio API**  
- **Express.js (optional for API)**  
- **dotenv (for environment variables)**  

## Contributors  

- **Frontend Developer:** Mohit Patel  
- **Backend Developer:** Irfan Lohar  
- **Research:** Sandeep Kumar Mehta  

## License  

This project is open-source and available under the **MIT License**.  

## Repository  

[BulkSmsApp on GitHub](https://github.com/sandeepkrmehta/BulkSmsApp/)  
```
