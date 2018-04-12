var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bankModel = new Schema({
    ifsc: {type: String},
    bank_id: {type: Number},
    branch: {type: String},
    address: {type: String},
    city: {type: String},
    district: {type: String},
    state: {type: String},
    bank_name: {type: String}
});

module.exports= mongoose.model('Bank', bankModel, 'bankbranch');