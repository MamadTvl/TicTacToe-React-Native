import {createStore} from 'redux'
import reducer from "./board/reducer";

const store = createStore(reducer)

export default store
