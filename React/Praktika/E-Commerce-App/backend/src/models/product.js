import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
		required: true,
	},
	photos: [String],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const User = mongoose.model("products", ProductSchema);

export default User;
