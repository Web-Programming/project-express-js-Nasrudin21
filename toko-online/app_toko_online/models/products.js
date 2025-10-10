const mongoose = require("mongoose");

//buat scehema produk
const ProductSchema = mongoose.Schema({
    //tidaak perlu membuat properti id karena akan dibuat otomatis
    // dengan nama id
    name:{
        type : String,
        required : [true, "Nama produk harus diisi"],
        trim : true,//menghilangan spasi diawal dan diakhir
    },
    price: {
        type : Number,
        required : [true, "Harga produk harus diisi"],
        min: [1000, "Harga produk minimal 1000"], //nilai minimum
        //max: [100000000, "Harga produk maksimal 100000000"],
    },
    description : {
        type : String,
        required : false,//menandakan kolom wajib diisi atau tidak
    },
    stock: {
        type : Number,
        default : 0,//memberikan nilai bawaan/default
    },
    createAT: {
        type : Date,
        default : Date.now,//memberikan nilai bawaan/default
    }
});

//buat model dari schema
const Product = mongoose.model('Product', ProductSchema);

//export model
module.exports = Product;