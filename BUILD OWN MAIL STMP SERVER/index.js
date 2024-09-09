const SMTPServer = require("smtp-server").SMTPServer;
const simpleParser = require('mailparser').simpleParser; // For parsing the incoming mail
const fs = require('fs'); // For saving emails (optional)

const server = new SMTPServer({
  // Disable STARTTLS to allow plain-text connections for local testing (not recommended in production)
  secure: false, 
  authOptional: true, // Disable authentication, you can enable it for real use cases
  
  // This function is called when the server receives data (the actual email)
  onData(stream, session, callback) {
    simpleParser(stream)
      .then(parsed => {
        console.log('Email received:', parsed.subject);
        console.log('From:', parsed.from.text);
        console.log('To:', parsed.to.text);
        console.log('Text body:', parsed.text);
        
        // Optionally, save the email content to a file
        fs.writeFile(`email_${Date.now()}.txt`, parsed.text, err => {
          if (err) console.error('Error saving email:', err);
          else console.log('Email saved!');
        });
      })
      .catch(err => {
        console.error('Error parsing email:', err);
      })
      .finally(() => {
        // Always call the callback when you're done with the email
        callback();
      });
  },

  // This function is called for authentication (optional)
  onAuth(auth, session, callback) {
    if (auth.username === "user" && auth.password === "pass") {
      return callback(null, { user: auth.username });
    }
    return callback(new Error("Invalid username or password"));
  }
});

server.on('error', err => {
  console.error('Error occurred:', err);
});

// Start the server
server.listen(25, () => console.log('SMTP server running on port 25'));
