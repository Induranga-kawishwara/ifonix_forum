const mongoose = require("mongoose");

const conform = new mongoose.Schema(
  {
    user: String,
    email : String,
    comment: String,
    createdAt : Date,
    // createdAt: {
    //   type: Date,
    //   default: Date.now
    // }


  },
  {
    collection: "conformcomments",
  }
);

mongoose.model("conformcomments", conform);