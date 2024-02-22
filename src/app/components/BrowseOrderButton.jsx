const BrowseOrderButton = ({content}) => {
	return <button
		className="font-bold bg-orange-500 hover:bg-emerald-500 text-white rounded-full px-8 py-4 mr-4 text-lg">
		{content}
	</button>;
}

export default BrowseOrderButton;