"use client"

import Test2View from "@/app/test2/Test2View";
import {getBookedTimesOfWeek} from "@/app/BookAppointment/BookAppointmentAPI";
import {useState} from "react";

const Test2Controller = () => {
	const [date, setDate] = useState(new Date())
	const [centreID, setCentreID] = useState(1)
	const [data, setData] = useState([])
	const [error, setError] = useState("")

	const click = async () => {
		setError("")

		console.log(date.toDateString(), centreID)

		const {success, error, data} = await getBookedTimesOfWeek(date, centreID)

		if (success) {
			setData(data)
		}
		else {
			setError(error)
		}
	}

	const updateDate = (add) => {
		let newDate = new Date()
		if (add)
			newDate.setDate(date.getDate()+1)
		else
			newDate.setDate(date.getDate()-1)
		setDate(newDate)
	}

	const updateCentre = (add) => {
		if (add)
			setCentreID(cID => cID + 1)
		else
			setCentreID(cID => cID -1)
	}

	return (
		<Test2View data={data} error={error} onClick={click} setDate={updateDate} setCentre={updateCentre}/>
	)
}

export default Test2Controller