 const store = {
    state: {
        // data
    },
    actions: {
        // methods
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