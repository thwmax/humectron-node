const mongoose = require('mongoose')

const TemperatureData = mongoose.model('TemperatureData', {
	value: {
		type: Number,
		required: true
	},
	unit: {
		type: String,
		required: true,
		lowercase: true,
		enum: ['c', 'f', 'k']
	},
	timestamp: {
		type: Date,
		default: Date.now
	},
	source: {
		type: String,
		required: true,
		trim: true,
		uppercase: true
	}
})

module.exports = TemperatureData