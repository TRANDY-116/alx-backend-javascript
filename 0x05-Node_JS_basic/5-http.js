// Create a more complex HTTP server using Node's HTTP module
const http = require('http');
const { readFile } = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

function countStudents(fileName) {
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const students = {};
        const fields = {};
        const lines = data.toString().trim().split('\n');
        for (const line of lines) {
          const [name, , , field] = line.split(',').map((entry) => entry.trim());
          if (name && field) {
            if (!students[field]) {
              students[field] = [];
            }
            students[field].push(name);
            fields[field] = (fields[field] || 0) + 1;
          }
        }
        let output = 'This is the list of our students\n';
        output += `Number of students: ${lines.length}\n`;
        for (const [field, count] of Object.entries(fields)) {
          output += `Number of students in ${field}: ${count}. List: ${students[field].join(', ')}\n`;
        }
        resolve(output);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    countStudents(process.argv[2].toString()).then((output) => {
      res.end(output);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

module.exports = app;
