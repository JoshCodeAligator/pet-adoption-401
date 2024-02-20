// a data type to hold import Pet information to display
export class PetDisplay {
	constructor(id, name, age, sex, status, description) {
		this.id = id
		this.name = name
		this.age = age
		this.sex = sex
		this.status = status
		this.description = description
	}

	static objectFromDict(dict) {
		return new PetDisplay(dict.pet_id, dict.name, dict.age, dict.sex, dict.status, dict.description)
	}

	toString() {
		return `ID: ${this.id}, name: ${this.name}, age: ${this.age}, sex: ${this.sex}, 
		status: ${this.status}, description: ${this.description}`
	}
}
