import Navbar from "@components/Navbar";

const Test2View = ({data, error, setDate, setCentre, onClick}) => {
	return (
		<>
			<Navbar/>
			<div className="absolute top-20">
				<button name={"set-centre"} onClick={() => {
					setCentre(true)
				}}>
					+1 CentreID
				</button>
				<button name={"set-centre"} onClick={() => {
					setCentre(false)
				}}>
					-1 CentreID
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
						{data.map((d, index) => (
							<p key={index}>
								{d.date.toDateString() + ": " + d.start_time + "\n\n"}
							</p>
						))}
					</>
				}
			</div>
		</>
	)
}

export default Test2View