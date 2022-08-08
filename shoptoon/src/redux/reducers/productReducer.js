import actionTypes from "../constants/actionTypes";
const initialState={
    products:[{
        id:"1",
        title:"jaseela",
        category:"fontend developer"
    }]
}

const productReducer=(state=initialState,action)=>{

    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            
            return state
    
        default:
          return  state
    
}
}
export default productReducer