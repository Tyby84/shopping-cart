import * as actionTypes from './actions';


const initialState = {
	product:[
		{id:1, name: "Laptop", desc: "17inch laptop"},
		{id:2, name: "Desktop PC", desc: "Pro type PC"},
		{id:3, name: "Screen", desc: "LG large screen"}
	],
	cartItems:[]
}

const reducer = (state = initialState, action) => {
	
	switch(action.type){
		
		case actionTypes.ADDTOCART:
			const newItem = {
				id: action.itemData.id,
				name: action.itemData.name,
				desc: action.itemData.desc
			}
			return {
				...state,
				cartItems: state.cartItems.concat( newItem )
			}
	}
	
	return state;
}

export default reducer;