import { useState} from "react";

/**
 * Drop down menu to select a rescue centre.
 * Selection made will be used by function setRescueCentre.
 */
const DropDownMenu = ({name, label, menuDataList , setIndex}) => {
	function handleSelectOption(event) {
		const index = event.target.value;

		// setIndex needs to be able to deal with getting -1 (invalid index passed)
		// possible if select empty option for selecting nothing
		setIndex(index)
	}

	return (
		<div>
			{/* Dropdown menu label */}
			<label htmlFor={name}>{label}</label>
			<br/>
			{/* Display all data passed when in menu and display the selected data when clicked */}
			<select
				name={name}
				onChange={handleSelectOption}>

				{/* First option is blank, for not selecting anything/cancel selection */}
				<option key={-1} value={-1}/>
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