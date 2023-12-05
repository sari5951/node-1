// const express = require('express');
// const students = require('./Student');
// const { name } = require('./User'); // Destructure the name property from the User module

// const app = express();
// const port = 8001;

// app.get('/', (req, res) => {
//   const header = `Hello, ${name}!`; // Use the destructured name variable here
//   let studentList = '';

//   // Build the student list HTML
//   students.forEach((student) => {
//     studentList += `<li>${student.name} - Age: ${student.age}, Grade: ${student.grade}</li>`;
//   });

//   // Build the complete HTML response
//   const html = `
//     <html>
//       <head>
//         <title>Student List</title>
//       </head>
//       <body>
//         <h1>${header}</h1>
//         <ul>
//           ${studentList}
//         </ul>
//       </body>
//     </html>
//   `;

//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write(html);
//   res.end();
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const studentList = [
//   {
//     name: "yakov",
//     age: 7,
//     grade: "A",
//   },
//   {
//     name: "moshe",
//     age: 9,
//     grade: "B",
//   },
//   {
//     name: "yerachmiel",
//     age: 13,
//     grade: "g",
//   },
//   {
//     name: "josefh",
//     age: 13,
//     grade: "g",
//   }
// ];

// module.exports = studentList;

// const user = {
//   name: "yakov",
//   age: 13,
//   grade: "A",
// };

// module.exports = user;
