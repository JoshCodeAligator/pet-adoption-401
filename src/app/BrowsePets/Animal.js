class Animal {

	constructor(id, name, age, sex, category, breed, img) {
		// the ones that can be simply copied
		this._id = id
		this._name = name
		this._breed = breed
		this._category = category

		// check if img is null
		if (img === null) {
			// this is a placeholder image, might want to add category checks?
			this._image = "/images/dog.jpg"
		}
		else {
			this._image = img
		}


		// convert age to a string (should be an int)
		this._age = age

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
		return this._age;
	}

	get sex() {
		return this._sex;
	}


	// factory function to create an Animal object from json/db query
	static objectFromJson(json) {
		return new Animal(json.pet_id, json.name, json.age, json.sex, json.category, json.breed, json.img)
	}
}

export default Animal;