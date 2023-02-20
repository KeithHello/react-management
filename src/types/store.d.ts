// ts provides RetureType<T> to get the return type of a function
// not directly make a import statement in a .d.ts file
type RootState = ReturnType<typeof import("@/store").getState>;
interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: function;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: function;
}