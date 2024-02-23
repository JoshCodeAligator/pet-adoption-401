class Animal {

	constructor(id, name, age, sex, category, breed, img) {
		// the ones that can be simply copied
		this._id = id.toString()
		this._name = name
		this._breed = breed
		this._category = category
		this._age = age

		// check if img is null or empty string
		if (img === null || img === "") {
			// this is a placeholder image, might want to add category checks? for different placeholder?
			this._image = "/images/dog.jpg"
		}
		else {
			this._image = img
		}

		// convert sex to full form
		if (sex === 'M') {
			this._sex = "Male"
		}
		else {
			this._sex = "Female"
		}
	}

	// at the moment will make object read only
	get id() {
		return this._id.toString();
	}

	get name() {
		return this._name;
	}

	get category() {
		return this._category
	}

	get breed() {
		return this._breed;
	}

	get image() {
		return this._image;
	}

	get age() {
		return this._age.toString() + " years";
	}

	get sex() {
		return this._sex;
	}


	// factory function to create an Animal object from json/db query
	static objectFromJson(json) {
		return new Animal(json.pet_id, json.name, json.age, json.sex, json.category, json.breed, json.img)
	}

	// function to get json
	toJson() {
		return {
			id: this._id,
			name: this._name,
			age: this._age,
			sex: this._sex,
			breed: this._breed,
			image: this._image,
		}
	}
}

export default Animal;