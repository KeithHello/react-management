
const defaultState = {
    num: 20,
}

let reducer = (state = defaultState, action: {type: string, val: number}) => {
    let newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "ADD":
            newState.num + 1
            break;
        case "SUB":
            newState.num - 1
            break;
        default:
            break;
    }

    return newState;
}

export default reducer;