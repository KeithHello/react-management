import handleNum from './index';

const defaultState = {
    ...handleNum.state,
}

let reducer = (state = defaultState, action: {type: string}) => {
    let newState = JSON.parse(JSON.stringify(state));

    // get the action name from the action type
    for (let key in handleNum.actionNames) {
        if (handleNum.actionNames[key] === action.type) {
            handleNum.actions[handleNum.actionNames[key]](newState, action);
            break;
        }
    }

    return newState;
}

export default reducer;