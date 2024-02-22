class Animal {

	constructor(id, name, age, sex, breed, img) {
		// the ones that can be simply copied
		this._id = id
		this._name = name
		this._breed = breed
		this._image = img

		// convert age to a string (should be an int)
		this._age = age.toString() + " years"

		// convert sex
		if (sex === 'M') {
			this._sex = "Male"
		}
		else {
			this._sex = "Female"
		}

	}

	// at the moment will make object read only
	get id() {
		return this._id;
	}

	get name() {
		return this._name;
	}

	get breed() {
		return this._breed;
	}

	get image() {
		return this._image;
	}

	get age() {
		return this._age;
	}

	get sex() {
		return this._sex;
	}


	// factory function to create an Animal object from json/db query
	static objectFromJson(json) {
		return new Animal(json.pet_id, json.name, json.age, json.sex, json.breed, json.img)
	}
}

export default Animal;