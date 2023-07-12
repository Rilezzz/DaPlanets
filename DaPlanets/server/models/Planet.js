import { Schema } from "mongoose";

export const PlanetSchema = new Schema({
    name: { type: String, required: true, maxlength: 40 },
    biome: { type: String, maxlength: 100 },
    atmoshpere: { type: Boolean, default: false },
    galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' }

})