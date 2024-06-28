const router = require("express").Router();
let Product = require("../models/product");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({storage});

// Create a new product

router.route("/add").post(upload.array('images', 5), (req,res) =>{
    const categories = req.body.categories;
    const productname = req.body.productname;
    const discription = req.body.discription;
    
    const images = req.files.map((file) => ({
        filename: file.originalname, 
        path: file.path, 
        
      }));

        

    const newProduct = new Product({
        categories,
        productname,
        discription,
        images
        
    })

    newProduct.save().then(() =>{
        console.log("success");
        res.status(201).json({ message: "Product added" });
    }).catch((err) =>{
        console.error(err);
         res.status(500).json({ message: "Failed to add product" });
    })

})


//Update a product

router.route("/update/:id").put(async (req,res) =>{
    try {
        const productID = req.params.id;
        const updateData = req.body;
    
       
        const updatesproduct = await Product.findByIdAndUpdate(
          productID,
          updateData,
          { new: true } 
        );
    
        if (!updatesproduct) {
          return res.status(404).json({ message: 'Product not found' });
        }
    
        res.json(updatesproduct);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update product' });
      }
})

//Retrieve all the products

router.route("/").get((req,res) =>{
    Product.find().then((products) =>{
        res.json(products)
    }).catch((err)=>{
        console.log(err)
    })
})
//find product by product name

router.route("/get/:productname").get(async (req,res) => {
    let productName = req.params.productname;
    const systemproduct = await Product.findOne({productname:productName})
    .then((systemproduct) =>{
        res.status(200).send({status: "product fetched", systemproduct});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "error with get product", error: err.message});
    })
})

//find product by categories name

router.route("/get_categories/:categories").get(async (req,res) => {
    let categoriesName = req.params.categories;
    const systemproduct = await Product.findOne({categories:categoriesName})
    .then((systemproduct) =>{
        res.status(200).send({status: "product fetched", systemproduct});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "error with get product", error: err.message});
    })
})

//delete product

router.route("/delete/:productid").delete(async (req,res) => {
    let productId = req.params.productid;

    await Product.findByIdAndDelete(productId).then(() =>{
        res.status(200).send({status: "Product deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "error with delete product", error: err.message});
    })
})

//search product
router.get('/search', async (req, res) => {
    
    const { keyword } = req.query;
    console.log(keyword);
    try {
        
        const products = await Product.find({
            $or: [
                { categories: { $regex: keyword, $options: 'i' } },
                { productname: { $regex: keyword, $options: 'i' } }
            ]
        });

        res.status(200).json({ message: 'Search results', results: products });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;