const mongoose = require('mongoose');

const dbUsername = 'idrizierisa';
const dbPassword = '2000Erisa';
const dbName = '06-JOBS-API';

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: dbName,
      user: dbUsername,
      pass: dbPassword,
    })
    .then((data) => console.log('CONNECTED TO THE DB', data))
    .catch((err) => console.error('Error connecting to the DB', err));
}


module.exports = connectDB