const mongoose = require('mongoose');
//const url = "mongodb://localhost:27017/EmployeeDB";
const url =
  'mongodb+srv://phuchau:N7ThC5Ry2M8jxRci@cluster0.3garv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded');
  } else {
    console.log('An Error Occured');
  }
});

require('./employee.model');
