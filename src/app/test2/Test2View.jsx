import Navbar from "@components/Navbar";
import BookedTimes from "@/app/test2/BookedTimes";

const Test2View = ({data, error, setDate, setCentre, onClick}) => {
	const bookedTimes = new BookedTimes(data)

	return (
		<>
			<Navbar/>
			<div className="absolute top-20">
				<button name={"set-centre"} onClick={() => {
					setCentre(true)
				}}>
					+1 petID
				</button>
				<button name={"set-centre"} onClick={() => {
					setCentre(false)
				}}>
					-1 petID
				</button>
				<br/>
				<button name={"set-date"} onClick={() => {
					setDate(true)
				}}>
					+1 Date
				</button>
				<button name={"set-date"} onClick={() => {
					setDate(false)
				}}>
					-1 Date
				</button>
				<br/>
				<button name={"get-data"} onClick={onClick}>
					Query
				</button>
				<br/>
				{error ? error :
					<>
						{data.map(({date, start_time}, index) => (
							<p key={index}>
								{date.toISOString() + ": " + start_time + "\n\n"}
							</p>
						))}
					</>
				}
				<br/>
				{"Is Mar 3, 2024, 14:00 booked: " + bookedTimes.timeIsBooked('2024-03-19', '15:00:00')}
				<br/>
				{"Is Mar 3, 2024, 15:00 booked: " + bookedTimes.timeIsBooked('2024-03-19', '15:00:00')}
			</div>
		</>
	)
}

export default Test2View