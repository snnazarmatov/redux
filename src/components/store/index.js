import {createStore} from 'redux';


const init = {
    counter: 0,
    showCounter: true
}

const counterReducer = (state = init,action) => {
if(action.type === 'INCREMENT') {
    return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
    }
}
if(action.type === 'DECREMENT') {
    return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
    }
}
if(action.type === 'INCREASE') {
    return {
        counter: state.counter + action.amount ,
        showCounter: state.showCounter,
    }
}
if(action.type === 'TOGGLE') {
    return {
        showCounter: !state.showCounter,
        counter: state.counter
    };
}
return state;
}

const store = createStore(counterReducer)
//чтобы его использавать все компоненты index.js где у нас есть корнивой файл <Арр/> render.провайдердин ичине АРР ты салып койобуз
export default store;