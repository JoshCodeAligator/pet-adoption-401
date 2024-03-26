function CategorySelectButton({content, categoryState, newCategory, onClick}) {
	return <button
		className={`font-bold border-4 border-white ${categoryState === newCategory ? "bg-white text-black" : "hover:bg-white hover:text-black"} text-white rounded-full px-6 py-3 mr-4`}
		onClick={onClick}
		disabled={categoryState === newCategory}
		style={{backgroundColor: categoryState === newCategory ? "white" : "", color: categoryState === newCategory ? "black" : ""}}
	>
		{content}
	</button>;
}

export default CategorySelectButton;