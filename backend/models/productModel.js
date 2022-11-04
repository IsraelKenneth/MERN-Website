import mongoose from "mongoose"


const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
})

const productSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },

    name: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true,
        default: false
    },

    category: {
        type: String,
        required: true,
        default: false
    },

    reviews: [reviewSchema],

    price: {
        type: Number,
        required: true,
        default: false
    },

    countInStock: {
        type: Number,
        required: true,
        default: false
    },

    rating: {
        type: Number,
        required: true,
        default: false
    },

    numReviews: {
        type: Number,
        required: true,
        default: false
    }






}, { timestamps: true })


const Product = mongoose.model('Product', productSchema)

export default Product