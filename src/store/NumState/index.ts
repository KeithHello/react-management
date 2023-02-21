const store = {
    state: {
        num: 20,
    },
    actions: {
        // sync methods only
        sub(newState: { num: number }, action: { val: number }) {
            newState.num -= 1;
        },
        add(newState: { num: number }, action: { val: number }) {
            newState.num += action.val;
        }
    },
    actionNames: {},
    asyncActions: {
        // async methods only
        sub_async(dispatch: Function, value: number) {
            console.log(value)

            setTimeout(() => {
                dispatch({ type: "ADD", val: 100 });
            }, 1000);
        }
    }
}

// This is a little bit of a hack to get the action names
let actionNames = {}
for (let key in store.actions) {
    actionNames[key] = key;
}

store.actionNames = actionNames;

export default store;