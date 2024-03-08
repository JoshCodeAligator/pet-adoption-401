// model for RescueCentre on client side

class RescueCentre {
	// default slot values
	constructor(centre_id, name, address, phone) {
		this.id = centre_id
		this.name = name
		this.address = address
		this.phone = phone
	}

	toString() {
		// converting to string, just the name of the centre
		return this.name
	}

	static objectFromJson({centre_id, name, address, phone}) {
		return new RescueCentre(centre_id, name, address, phone)
	}

}

export default RescueCentre