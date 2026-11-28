import { useReducer } from "react"; 
const initialState = 0;
function reducer(state,action){
    switch (action.type){
        case "increment":
            return state + 1;

        case "decrement":
            return state - 1;

        case "reset":
            return initialState;

        default:
            return state;
    }
}

export default function App(){
    const[count,dispatch] = useReducer(reducer,initialState);

    return(
        <div className="conatiner mt-4">
            <h2>Count Values:{count}</h2>

            <button className="btn btn-success me-2"
                onClick={() => dispatch({type:"increment"})}>
                Increment
            </button>

             <button className="btn btn-danger me-2"
                onClick={() => dispatch({type:"decrement"})}>
                Decrement
            </button>

             <button className="btn btn-warning"
                onClick={() => dispatch({type:"reset"})}>
                Reset
            </button>

        </div>
    )
}