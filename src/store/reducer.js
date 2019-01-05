const initialState = {
	product:[
		{id:1, name: "Laptop", desc: "17inch laptop"},
		{id:2, name: "Desktop PC", desc: "Pro type PC"},
		{id:2, name: "Screen", desc: "LG large screen"}
	],
	cartItems:[]
}

const reducer = (state = initialState, action) => {
	return state;
}

export default reducer;