var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Family_Details');
console.log("Name  - Abhijeet Yadav");
console.log("Reg no. - 11800671");
console.log("Section - D1814");
var Family_Details = mongoose.model('Family_Details', 
                                        {  Name: {type: String},
                                           Regn: {type: Number},
                                           Count_of_Member: {type: Number},
                                           City: {type: String},
                                        });

var newDetails = new Family_Details({ Name:'Abhijeet Yadav', Regn:11800671,Count_of_Member:5,City:'Jal' });
newDetails.save().then((doc) => {  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {  console.log('Unable to save', e);});