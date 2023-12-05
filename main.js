const express = require('express');
const students = require('./Student');
const user = require('./User');

const app = express();
const port = 8011;


app.get('/', (req, res) => {
  const header = `Hello, ${user.name}!`;
  let studentList = '';

 
  students.forEach((student) => {
    studentList += `<li>${student.name} - Age: ${student.age}, Grade: ${student.grade}</li>`;
  });

  // HTML:
  const html = `
    <html>
      <head>
        <title>Student List</title>
      </head>
      <body>
        <h1>${header}</h1>
        <ul>
        <h2>all the Students:</h2>
          ${studentList}
        </ul>
      </body>
    </html>
  `;

  res.writeHead(200, {    'Content-Type': 'text/html'
});
res.write(html);
res.end();
});

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
