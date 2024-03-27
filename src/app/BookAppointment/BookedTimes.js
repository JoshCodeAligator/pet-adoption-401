class BookedTimes {
	constructor(times) {
		// times should be an array of {date, start_time}

		// we will be storing them as a set of times (from js Date objects)

		// store the getTime() as equality for js date objects is wacky,
		// simply to store numbers for simpler comparisons

		this.times = new Set()

		// add all times to the set as js Date objects
		for (const {date, start_time} of times) {
			// convert to a js date object
			const jsDate = this._convertStringDateToJsDate(date, start_time)
			this.times.add(jsDate.toISOString())
		}

	}

	/**
	 * Checks if a date and time pair is part of this BookedTimes object.
	 * @param date date as a string in following format: YYYY-MM-DD
	 * @param time time as a string in following format: hh:mm
	 * @return {boolean} true if time provided is booked, false otherwise
	 */
	timeIsBooked(date, time) {
		// convert to a js date
		const checkTime = this._convertStringDateToJsDate(date, time)

		return this.times.has(checkTime.toISOString())
	}

	/**
	 * Returns the hours from the time as a string
	 * @param time time as a string in following format hh:mm
	 * @return {string} hh of time
	 * @private
	 */
	_getHours(time) {
		return time.slice(0,2)
	}

	/**
	 * Returns the minutes from the time as a string
	 * @param time time as a string in the following format hh:mm
	 * @return {string} mm of time
	 * @private
	 */
	_getMinutes(time) {
		return time.slice(3, 5)
	}

	/**
	 * Returns the date from a date as a string
	 * @param date date a string, with following format: YYYY-MM-DD.*
	 * @return {{date: String, month: String, year: String}} YYYY-MM-DD of date
	 * @private
	 */
	_getDate(date) {
		return {
			year: date.slice(0,4),
			month: date.slice(5, 7),
			day: date.slice(8, 10)
		}
	}

	/**
	 * Converts a date and time from a string to a js Date object
	 * @param date date object
	 * @param time time as a string in following format: hh:mm
	 * @return {Date} the js Date object equivalent of date and time passed
	 * @private
	 */
	_convertStringDateToJsDate(date, time) {

		// store ISOString

		if (typeof date !== "string") {
			date = date.toISOString()
		}
		else {
			date = new Date(date).toISOString()
		}

		// extract year, month, day
		// const {year, month, day} = this._getDate(date)

		// extract hours and minutes
		const hour = parseInt(this._getHours(time), 10)
		const minute = parseInt(this._getMinutes(time), 10)

		const jsDate = new Date(date)

		// set date
		// jsDate.setFullYear(parseInt(year, 10), parseInt(month, 10), parseInt(day, 10))

		// console.log("Partial Conversion", jsDate.toISOString())

		// set the time
		jsDate.setUTCHours(hour, minute, 0, 0)

		console.log("Converted: ", date, time, "->", jsDate.toISOString())

		return jsDate
	}

}

export default BookedTimes