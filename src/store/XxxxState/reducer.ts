import handleArr from './index';

const defaultState = {
    ...handleArr.state,
}

let reducer = (state = defaultState, action: {type: string}) => {
    let newState = JSON.parse(JSON.stringify(state));

    // get the action name from the action type
    for (let key in handleArr.actionNames) {
        if (handleArr.actionNames[key] === action.type) {
            handleArr.actions[handleArr.actionNames[key]](newState, action);
            break;
        }
    }

    return newState;
}

export default reducer;