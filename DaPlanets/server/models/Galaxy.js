import { Schema } from "mongoose";

export const GalaxySchema = new Schema({

    name: { type: String, required: true, maxlength: 20 },
    stars: { type: Number, required: true }


    // name: { type: String, required: true, maxlength: 20 },
}, { timestamps: true, toJSON: { virtuals: true } })