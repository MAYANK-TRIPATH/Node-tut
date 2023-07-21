// Suppose we have data-array in DATA.json and we have to fetch or use that data, we make Schema.

const { default: mongoose } = require("mongoose");

const mongo = require(mongoose);

// Connecting Mongo with Node App
mongoose.connect("link of db/app-name")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("Mongo Error", err));



// Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
                    // FirstName, lastName, email, jobTitle etc its all are from Data.Json file
    jobTitle: {
        type: String,
    },

    gender: {
        type: String,
    },
})

// Model

const User = mongoose.model("user", userSchema);