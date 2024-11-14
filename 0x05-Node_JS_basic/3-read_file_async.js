// Reading a file synchronously with Node JS
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n').slice(1); // Exclude the header line

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

    console.log(`Number of students: ${validLines.length}`);
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
