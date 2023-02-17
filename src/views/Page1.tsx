import {useSelector, useDispatch} from "react-redux";

const View = () => {
    // get the state from redux
    const num = useSelector((state: RootState) => state.num);

    // modify the state
    const dispatch = useDispatch();
    const add = () => {
        dispatch({type: "ADD", val: 3});
    }

    return (
        <div className="page">
            <p>This is Page 1</p>
            <div>{num}</div>
            <button onClick={add}>Add</button>
        </div>
    );
}

export default View