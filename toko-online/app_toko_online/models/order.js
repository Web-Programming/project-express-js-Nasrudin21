const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    User : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items : [{
        productName: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            Min: 1
        },
        price: {
            type: Number,
            required: true,
            Min: 0
        },
    }],
    totalAmount: { 
        type: Number,
        required:
        true, min: 0 
    },
    status: { 
        type: String, 
        enum: ['Tertunda', 'Proses', 'Selesai', 'Dibatalkan'], 
        default: 'Tertunda' 
    },
    orderDate: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Order', orderSchema);
