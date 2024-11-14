// Create a more complex HTTP server using Express
const express = require('express');

const fs = require('fs');

const app = express();
const hostname = '127.0.0.1';
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').slice(1);
        const validLines = lines.filter((line) => line.trim() !== '');
        const fields = {};
        validLines.forEach((line) => {
          const parts = line.split(',');
          const field = parts[3].trim();
          const name = parts[0].trim();
          if (field) {
            if (fields[field]) {
              fields[field].push(name);
            } else {
              fields[field] = [name];
            }
          }
        });
        let output = `Number of students: ${validLines.length}\n`;
        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents('database.csv')
    .then((output) => {
      res.send(`This is the list of our students\n${output}`);
    })
    .catch((error) => {
      res.status(500).send('Cannot load the database\n');
      console.error(error.message);
    });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
