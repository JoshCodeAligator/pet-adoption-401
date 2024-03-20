import Navbar from "@components/Navbar";

const Test2View = ({data, error, setDate, setCentre, onClick}) => {
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
								{date.toDateString() + ": " + start_time + "\n\n"}
							</p>
						))}
					</>
				}
			</div>
		</>
	)
}

export default Test2View