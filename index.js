const http = require('http');
const fs = require('fs');
const url = require('url');
const multer = require('multer');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);

  // Log a message when the server starts listening on port 5500
  console.log('Server listening on port 5500');

  // Check the requested URL and handle accordingly
  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is Home Page');
  } else if (parsedUrl.pathname === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is About Page');
  } else if (parsedUrl.pathname === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is Contact Page');
  } else if (parsedUrl.pathname === '/file-write') {
    // Using fs.writeFile to create a file "demo.txt" and write "hello world" in it
    fs.writeFile('demo.txt', 'hello world', (err) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Error writing to file');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('File created and text written successfully');
      }
      res.end();
    });
    return; // Return to avoid res.end() being called twice
  } else if (parsedUrl.pathname === '/upload-file') {
    // Example of file upload using multer
    const upload = multer({ dest: 'uploads/' });

    upload.single('file')(req, res, (err) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Error uploading file');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('File uploaded successfully');
      }
      res.end();
    });
    return; // Return to avoid res.end() being called twice
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Not Found');
  }

  // End the server response
  res.end();
});

// Listen on port 5500
server.listen(5500);
