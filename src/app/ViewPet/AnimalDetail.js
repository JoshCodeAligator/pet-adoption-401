import Animal from "@/app/BrowsePets/Animal";
import Centre from "@ViewPet/Centre";

class AnimalDetail extends Animal {

	constructor(id, name, age, sex, category, breed, img, status, centre_name, centre_address, centre_phone, description) {
		super(id, name, age, sex, category, breed, img)
		this._status = status

		this._centre = new Centre(centre_name, centre_address, centre_phone)

		this.description = description
	}

	get status() {
		return this._status
	}

	get centre_name() {
		return this._centre.name
	}

	get centre_address() {
		return this._centre.address
	}

	get centre_phone() {
		return this._centre.phone
	}

	// factory function to create an AnimalDetail object from json/db query
	static objectFromAPIReturn({pet_id, name, age, sex, category, breed, img, status, centreName, centreLocation, centrePhone, description}) {
		return new AnimalDetail(pet_id, name, age, sex, category, breed, img, status,
			centreName, centreLocation, centrePhone, description)
	}
}

export default AnimalDetail;