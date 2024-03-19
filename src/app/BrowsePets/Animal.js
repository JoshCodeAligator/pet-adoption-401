class Animal {
  constructor(id, name, age, sex, category, breed, img) {
    // the ones that can be simply copied
    this._id = id;
    this._name = name;
    this._breed = breed;
    this._category = category;
    this._age = age;

    // check if img is null or empty string
    if (img === null || img === "") {
      // this is a placeholder image, might want to add category checks? for different placeholder?
      this._image = "/images/dog.jpg";
    } else {
      this._image = img;
    }

    // convert sex to full form
    if (sex === "M") {
      this._sex = "Male";
    } else {
      this._sex = "Female";
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
    return this._category;
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
  static objectFromJson({ pet_id, name, age, sex, category, breed, img }) {
    return new Animal(pet_id, name, age, sex, category, breed, img);
  }
}

export default Animal;
