class Centre {
	constructor(centre_name, centre_address, centre_phone) {
		this._name = centre_name
		this._address = centre_address
		this._phone = centre_phone
	}

	get phone() {
		return this._phone;
	}
	get address() {
		return this._address;
	}
	get name() {
		return this._name;
	}
}

export default Centre