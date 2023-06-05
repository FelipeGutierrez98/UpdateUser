const mongoose = require("mongoose");

const Uri = "mongodb+srv://APIUSUARIOS:H6s0O0u044aly630@apiusuarios.yxpjx3j.mongodb.net/";

mongoose.connect(Uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Se conecto con base de datos"))
.catch(err => console.log("Error de conexion con la base de datos", err));

const userSchema = new mongoose.Schema({

    username: {type:String, required:true},
    email: {type:String, required:true },
    password: {type:String, required:true}
});

module.exports = mongoose.model('Usuarios', userSchema);
