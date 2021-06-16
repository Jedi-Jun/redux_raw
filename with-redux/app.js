function reducer(state, action) {
    // console.log('reducer_state: ', state);
    // console.log('reducer_action: ', action);
    if(state === undefined) {
        return { color: 'yellow' }  // initial state value
    }
    let newState;
    if(action.type === 'CHANGE_COLOR') {
        newState = Object.assign({}, state, {color: action.color});
    }
    console.log(state)
    console.log(action)
    return newState;
}


const store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const state = () => store.getState();
// console.log('Redux.createStore(reducer): ', store);
console.log('store.getState(): ', state());

// @@@
function fireRed() {
    store.dispatch({ type: 'CHANGE_COLOR', color: 'red' });
    changeAllColor(state().color);
}
// store.subscribe(fireRed());

function fireGreen() {
    store.dispatch({ type: 'CHANGE_COLOR', color: 'green' });
    changeAllColor(state().color);
}
// store.subscribe(fireGreen());

function fireBlue() {
    store.dispatch({ type: 'CHANGE_COLOR', color: 'blue' });
    changeAllColor(state().color);
}
// store.subscribe(fireBlue);

function changeAllColor(color = state().color) {
    document.querySelector('.component-1').style.background = color;
    document.querySelector('.component-2').style.background = color;
    document.querySelector('.component-3').style.background = color;
}
changeAllColor();
