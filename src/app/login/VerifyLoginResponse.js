/**
 * Data structure that holds the response from db query verifying login information
 */
class VerifyLoginResponse {
	constructor(found, error) {
		// found is a boolean if the account was found in the db
		this.found = found

		// Optional error message if found is false
		if (!this.found) {
			this.error = error
		}
		else {
			this.error = null
		}
	}

}

export default VerifyLoginResponse