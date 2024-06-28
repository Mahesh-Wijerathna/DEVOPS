const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

    categories : {
        type : String,
        require: true
    },
    productname : {
        type : String,
        require: true
    },
    discription : {
        type : String,
        require: true
    },
    images: [
        {
            filename: {
                type: String,
                required: true
              }
        },
      ]
    
    

})

const Product = mongoose.model("Product",productSchema);

module.exports = Product;