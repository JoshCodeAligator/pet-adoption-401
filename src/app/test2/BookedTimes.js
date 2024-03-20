class BookedTimes {
	constructor(times) {
		// times should be an array of {date, start_time}

		// we will be storing them as a set of js Date objects

		this.times = new Set()

		// add all times to the set as js Date objects
		for (const {date, start_time} of times) {
			// convert to a js date object
			const jsDate = this._convertStringDateToJsDate(date, start_time)
			this.times.add(jsDate)
		}

	}

	/**
	 * Checks if a date and time pair is part of this BookedTimes object.
	 * @param date date as a string in following format: YYYY-MM-DD
	 * @param time time as a string in following format: hh:mm
	 * @return {boolean} true if time provided is booked, false otherwise
	 */
	timeIsBooked(date, time) {
		// first convert to a js date
		const checkTime = this._convertStringDateToJsDate(date, time)

		return this.times.has(checkTime)
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
	 * Converts a date and time from a string to a js Date object
	 * @param date date as a string in following format: YYYY-MM-DD
	 * @param time time as a string in following format: hh:mm
	 * @return {Date} the js Date object equivalent of date and time passed
	 * @private
	 */
	_convertStringDateToJsDate(date, time) {
		const jsDate = new Date(date)

		// extract hours and minutes
		const hour = parseInt(this._getHours(time), 10)
		const minute = parseInt(this._getMinutes(time), 10)

		// set the time
		jsDate.setHours(hour, minute)

		return jsDate
	}
}

export default BookedTimes