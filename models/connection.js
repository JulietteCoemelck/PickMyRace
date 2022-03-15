var mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();   

const BDD_LINK = process.env.BDD_LINK;

var options = {
 connectTimeoutMS: 5000,
 useNewUrlParser: true,
 useUnifiedTopology : true
}
mongoose.connect(`${BDD_LINK}`, options, function(err) { console.log(err);
 }
);

module.exports = mongoose;