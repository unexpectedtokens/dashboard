const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://danieldejong:Twitterdetwit44!!@trondo-ixcyv.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  },
  () => {
    console.log("connected to DB");
  }
);
