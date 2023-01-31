const mongoose = require("mongoose")

const ResultScheme = new mongoose.Schema(
  {
    fecha:{
      type:any
    },
    judadores:{
      type:[String]
    },
    rondasiete:{
      type:[Number]
    },
    rondacorazon:{
      type:[Number]
    },
    rondaqueen:{
      type:[Number]
    },
    rondatodo:{
      type:[Number]
    },
    rondanada:{
      type:[Number]
    },
    rondasdomino:{
      type:[Number]
    },
  }
);

module.exports = mongoose.model("results", ResultScheme)
