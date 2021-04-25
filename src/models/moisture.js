const mongoose = require('mongoose')

const moistureSchema = new mongoose.Schema({
	value: {
		type: Number,
		required: true
	},
	source: {
		type: String,
		required: true,
		trim: true,
	}
}, {
	timestamps: true
})
const Moisture = mongoose.model('Moisture', temperatureSchema)

module.exports = Moisture