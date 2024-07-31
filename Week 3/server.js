// The package for the web server
const express = require('express');
// Additional package for logging of HTTP requests/responses
const morgan = require('morgan');
const app = express();
const port = 3000;
// Include the logging for all requests
app.use(morgan('common'));
// Tell our application to serve all the files under the `public_html` directory
app.use(express.static('public_html'));

// Handler for GET requests on the / route
app.get('/', (req, res) => {
    
    const currentTime = new Date().toTimeString();
    
    const message = `<h2>A Dynamically Created Page</h2> <br>Hey! Your request received at <b>${currentTime}</b><br><br>Please call again soon!`;

    res.send(message);
});

app.get('/forceerror', (req, res) => {
    const errorMessage = "ERROR(500):TypeError: Cannot read properties of undefined (reading 'nomethod')"; 
    res.send(errorMessage);
  });
// ********************************************
// *** Other route/request handlers go here ***
// ********************************************

// Error handler for 404
app.use((req, res, next) => {
    res.status(404).send("<h2>404: File not found</h2>");
});

// Error handler for 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Sorry, something went wrong on the server.");
});


// Tell our application to listen to requests at port 3000 on the localhost
app.listen(port, ()=> {
    // When the application starts, print to the console that our app is
    // running at http://localhost:3000. Print another message indicating
    // how to shut the server down.
    console.log(`Web server running at: http://localhost:${port}`);
    console.log(`Type Ctrl+C to shut down the web server`);
});
