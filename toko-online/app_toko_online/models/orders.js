const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    User : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderItems : [
        {
        product: {
            type: mongoose.Schema.Types.String,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            Min: 1
        },
        priceAtOrder: {
            type: Number,
            required: true
        },
    },
],
    totalAmount: { 
        type: Number,
        required: true
    },
    status: { 
        type: String, 
        default: 'Tertunda',
        enum: ['Tertunda', 'Proses', 'Selesai', 'Dibatalkan'], 
    },
    orderDate: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Order', orderSchema);
