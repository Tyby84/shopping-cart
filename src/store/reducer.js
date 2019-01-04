const initialState = {
	product:[
		{id:1, name: "Laptop", desc: "17inch laptop"},
		{id:2, name: "Desktop PC", desc: "Pro type PC"}
	],
	cartItems:[]
}

const reducer = (state = initialState, action) => {
	return state;
}

export default reducer;