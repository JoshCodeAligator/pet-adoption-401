import Animal from "@/app/BrowsePets/Animal";

class AnimalDetail extends Animal {

	constructor(id, name, age, sex, category, breed, img, centre_name, centre_address, centre_phone) {
		super(id, name, age, sex, category, breed, img)

		this._centre = {
			name: centre_name,
			address: centre_address,
			phone: centre_phone
		}

	}

	get centre() {
		return this._centre
	}

	// factory function to create an AnimalDetail object from json/db query
	static objectFromJson({pet_id, name, age, sex, category, breed, img, centreName, centreLocation, centrePhone}) {
		return new AnimalDetail(pet_id, name, age, sex, category, breed, img,
			centreName, centreLocation, centrePhone)
	}
}

export default AnimalDetail;