import {createStore,applyMiddleware} from "redux"
import reducers from "./reducers/index"

const middleware = (store)=>(next)=>(action)=>{
    console.log(action);
    next(action)
}
const store =createStore(reducers,{},applyMiddleware(middleware))
export default store