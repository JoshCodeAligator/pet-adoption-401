import Navbar from "@components/Navbar";
import BookedTimes from "@/app/test2/BookedTimes";
import {useEffect, useState} from "react";

const Test2View = ({data, error, setDate, setCentre, onClick}) => {
	const [b1, setB1] = useState(false)
	const [b2, setB2] = useState(false)

	return (
		<>
			<Navbar/>
			<div className="absolute top-20">
				<button name={"set-centre+"} onClick={() => {
					setCentre(true)
				}}>
					+1 petID
				</button>
				<button name={"set-centre-"} onClick={() => {
					setCentre(false)
				}}>
					-1 petID
				</button>
				<br/>
				<button name={"set-date+"} onClick={() => {
					setDate(true)
				}}>
					+1 Date
				</button>
				<button name={"set-date-"} onClick={() => {
					setDate(false)
				}}>
					-1 Date
				</button>
				<br/>
				<button name={"get-data"} onClick={onClick}>
					Query
				</button>
				<br/>
				<p>Check console for results</p>
				{error ? error :
					<>
						{data ? data.times.forEach(({time}) => (
							<p>
								{(new Date(time).toDateString()) + "\n\n"}
							</p>
						)) :
						<p>Null</p>
						}
					</>
				}
				<br/>
				<button onClick={() => {
					setB1(data.timeIsBooked('2024-03-19', '15:00:00'))
					console.log(data.timeIsBooked('2024-03-19', '15:00:00'))
				}}>
					Check March 19, 2024, 14:00 in BookedTimes
				</button>
				<br/>
				<p>{b1}</p>
				<br/>
				<button onClick={() => {
					setB2(data.timeIsBooked('2024-03-19', '14:00:00'))
					console.log(data.timeIsBooked('2024-03-19', '14:00:00'))
				}}>
					Check March 19, 2024, 15:00 in BookedTimes
				</button>
				<br/>
				<p>{b2}</p>
			</div>
		</>
	)
}

export default Test2View