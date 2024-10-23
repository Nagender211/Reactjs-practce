const mongoose=require('mongoose');
const validator=require('validator')
const mongooseSchema=new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3,"the first name should be more than atleast 3 letter"],
        maxlength: [20,"the firstName is not more the 20 letters"],
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3,"the last name should be more than atleast 3 letter"],
        maxlength: [20,"the lastName is not more the 20 letters"],
    },
    email: {
        type: String,
        required: true,
        validator: [validator.isEmail,"please provied a valid email"]
    },
    // time: {
    //     type: Date,
    //     default: Date.now,
    //     required: true
    // },
    // date: {
    //     type: String,
    //     required: true
    // },
    phone: {
        type: String,
        required: true,
        minlength: [11,"please enter the 11 numbers digits"],
        maxlength: [11,"the phone number is not more than the 11 digits"]
    },
   

})

module.exports=mongoose.model('UserData',mongooseSchema);

// 94Si9LGiUdb69hVN