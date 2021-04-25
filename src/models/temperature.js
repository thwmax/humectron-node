const mongoose = require('mongoose')

const temperatureSchema = new mongoose.Schema({
	value: {
		type: Number,
		required: true
	},
	unit: {
		type: String,
		required: true,
		lowercase: true,
		trim: true,
		enum: ['c', 'f', 'k']
	},
	source: {
		type: String,
		required: true,
		trim: true,
	}
}, {
	timestamps: true
})
const Temperature = mongoose.model('Temperature', temperatureSchema)

module.exports = Temperature