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
	created_at: {
		type: Date,
		default: Date.now
	},
	source: {
		type: String,
		required: true,
		trim: true,
	}
})
const Temperature = mongoose.model('Temperature', temperatureSchema)

module.exports = Temperature