function CategorySelectButton({content, categoryState, newCategory, onClick}) {
	return <button
		className={`font-bold border-4 border-white ${categoryState === newCategory ? "bg-white" : "hover:bg-white"} text-black rounded-full px-6 py-3 mr-4`}
		onClick={onClick}
		disabled={categoryState === newCategory}
		style={{backgroundColor: categoryState === newCategory ? "white" : ""}}
	>
		{content}
	</button>;
}

export default CategorySelectButton;