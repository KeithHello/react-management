import { useSelector, useDispatch } from "react-redux";

const View = () => {
    // get the state from redux
    const { arr, num } = useSelector((state: RootState) =>
    ({
        arr: state.handlereArr.arr,
        num: state.handlerNum.num
    })
    );

    // modify the state
    const dispatch = useDispatch();
    const changeNum = () => {
        dispatch({ type: "ADD", val: 100 });
    }
    const changeArr = () => {
        dispatch({ type: "arrPush", val: 30 });
    }

    // async modify the state using redux-thunk
    const changeNum2 = () => {
        dispatch((dispatch: Function) => {
            setTimeout(() => {
                dispatch({ type: "ADD", val: 100 });
            }, 1000);
        });
    }

    return (
        <div className="page">
            <p>Module Redux Demo</p>
            <div style={{margin: '20px 10px'}}>
                <div>Num Demo: {num}</div>
                <button onClick={changeNum}>Add</button>
            </div>

            <div style={{margin: '20px 10px'}}>
                <div>Array Demo: {arr}</div>
                <button onClick={changeArr}>Add array</button>
            </div>

            <div style={{margin: '20px 10px'}}>
                <div>Async Num Demo: {num}</div>
                <button onClick={changeNum2}>Add</button>
            </div>
        </div>
    );
}

export default View