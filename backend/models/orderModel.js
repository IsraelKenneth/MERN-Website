import mongoose from "mongoose"

const orderSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"

    },

    orderItems: 
})