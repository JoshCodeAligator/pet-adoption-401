import { useState} from "react";

/**
 * Drop down menu to select a rescue centre.
 * Selection made will be used by function setRescueCentre.
 */
const DropDownMenu = ({name, label, menuDataList , setIndex}) => {
	// use index -1 as unselected
	const [selectedData, setSelectedData] = useState(null)
	// purpose of this state is only in select value attribute
	// possible that it isn't needed as no clue for the purpose of the value attribute of select


	function handleSelectOption(event) {
		const data = event.target.value;
		const index = event.target.key

		// not sure why we call setSelectedIndex
		setSelectedData(data)

		// setIndex needs to be able to deal with getting -1 (invalid index passed)
		// possible if select empty option for selecting nothing
		setIndex(index)
	}

	return (
		<div>
			{/* Dropdown menu label */}
			<label htmlFor={name}>{label}</label>
			{/* Display all data passed when in menu and display the selected data when clicked */}
			<select
				name={name}
				onChange={handleSelectOption}
				value={selectedData}>
				{/* No clue about the purpose value attribute here */}

				{/* First option is blank, for not selecting anything/cancel selection */}
				<option value={-1}/>
				{/* Display the rescue centres */}
				{menuDataList.map((data, index) => (
					<option key={index} value={index}>
						{data.toString()}
						{/* Assumption that there is a toString defined for data */}
					</option>
				))}
			</select>
		</div>
	)
}

export default DropDownMenu