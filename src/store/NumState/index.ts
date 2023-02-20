const store = {
    state: {
        num: 20,
    },
    actions: {
        // sync methods only
        SUB(newState: { num: number }, action: { val: number }) {
            newState.num -= 1;
        },
        ADD(newState: { num: number }, action: { val: number }) {
            newState.num += action.val;
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