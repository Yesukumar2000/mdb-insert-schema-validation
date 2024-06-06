let mongoose = require("mongoose");


let HeroSchema=new mongoose.Schema({
    HeroName:String,
    age:Number,
    teamName:String,
    email:String,
    nationality:String,
});

let Hero=new mongoose.model("Hero",HeroSchema);
// let Prabhas=new Hero({ 
// HeroName:Prabhas,
// age:45,
// teamName:Kalki,
// email:"prabhas@gmail.com",
// nationality:Indian,

// });

// Prabhas.save();

let saveDataIntoDB=async()=>{
    let Prabhas=new Hero({ 
        HeroName:Prabhas,
        age:45,
        teamName:Kalki,
        email:prabhasgmailcom,
        nationality:Indian,
});

await Hero.insertMany([Prabhas]);
console.log("Successfully saved data into DB");
}
let connectToMongoDB = async () => {
  try {
    await mongoose.connect(
    "mongodb://localhost:27017/hero"
    );
   
    console.log("Success");
    saveDataIntoDB();
  } catch (err) {
    console.log("Unable to connect to MDB");
  }
};
connectToMongoDB();
