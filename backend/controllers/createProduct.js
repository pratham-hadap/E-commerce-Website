// const Product = require("../models/Product");

// exports.createProduct = async(req,res)=>{
//     try{
//         const{name, description, price} = req.body;
//         const image = req.File;

//         if (!image) {
//             return res.status(400).json({
//               success: false,
//               message: "Image is required",
//             });
//           }

//         const response = await Product.create({
//             name,
//             description,
//             price,
//             image, 
            
//         });

//         console.log(" create product response", response);

//         res.status(200).json({
//             success:true,
//             message:"Product Created Successfully"
//         })

//     }
//     catch(error){
//         res.status(500).json({
//             success: false,
//             message: "Internal Server Error",
//             error: error.message  // This is correct
//         });
//     }
// }


// const Product = require('../models/Product');

// // Create Product Controller
// exports.createProduct = async (req, res) => {
//   try {
//     const { name, description, price } = req.body;

//     // Ensure image is uploaded
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "Image is required",
//       });
//     }

//     const file = req.files.image; // Get uploaded image filename
//     console.log("file aa gayi", file);

//     // let path = __dirname + "/files/" + Date.now() + `.${image.name.split('.')[1]}`;
//     // const path = __dirname + "/files" + Date.now() + `.${file.name.split('.')[1]}`;

//     // console.log("path",path);

//     // file.mv(path,(error)=>{
//     //   console.log("error while moving image to path",error)
//     // })


//       const path = __dirname + "/files/" + Date.now() + `.${file.name.split('.').pop()}`;

//       file.mv(path, (error) => {
//           if (error) {
//               console.error("Error while moving image to path", error);
//               return res.status(500).json({
//                   success: false,
//                   message: "Error while uploading the image",
//               });
//           }
//       });


//     // Create new product with image
//     const response = await Product.create({
//       name,
//       description,
//       price,
//       file:file.name,
//     });

//     console.log("Product Created", response);

//     res.status(201).json({
//       success: true,
//       message: "Product created successfully",
//       data: response,
//     });
//   } catch (error) {
//     console.error("Error while creating product", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error",
//     });
//   }
// };









const Product = require('../models/Product');
const path = require('path');

exports.createProduct = async (req, res) => {
    try {
        const { name, description, price } = req.body;

        // Ensure image is uploaded
        if (!req.files || !req.files.image) {
            return res.status(400).json({
                success: false,
                message: "Image is required",
            });
        }

        const file = req.files.image; // Get uploaded image
        const fileExtension = path.extname(file.name);
        const filename = Date.now() + fileExtension; // Create unique filename
        const uploadPath = path.join(__dirname, '../files/', filename); // Define where to store the file

        // Move the file to the 'files' folder
        file.mv(uploadPath, (err) => {
            if (err) {
                console.error("Error while moving file", err);
                return res.status(500).json({
                    success: false,
                    message: "Error while uploading the image",
                });
            }
        });

        // Create new product with image
        const response = await Product.create({
            name,
            description,
            price,
            image: filename, // Save the filename in the database
        });

        console.log("Product Created", response);

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: response,
        });
    } catch (error) {
        console.error("Error while creating product", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

