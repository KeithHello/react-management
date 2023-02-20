 const store = {
    state: {
        arr: [10, 20, 30],
    },
    actions: {
        arrPush(newState: {arr: number[]}, action: {val: number}) {
            newState.arr.push(action.val);
        }
    },
    actionNames: {}
}

// This is a little bit of a hack to get the action names
let actionNames = {}
for (let key in store.actions) {
    actionNames[key] = key;
}

store.actionNames = actionNames;

export default store;