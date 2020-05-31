// const addActionOne = {
//     type: 'ADD_ONE',
// };

// const addActionTen = {
//     type: 'ADD_TEN',
// };

// const removeActionOne = {
//     type: 'REMOVE_ONE',
// };

// const removeActionTen = {
//     type: 'REMOVE_TEN',
// };

// const resetAction = {
//     type: 'RESET',
// };

const CounterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'ADD_ONE':
            return state + 1;
        case 'ADD_TEN':
            return state + 10;
        case 'REMOVE_ONE':
            return state - 1;
        case 'REMOVE_TEN':
            return state - 10;
        case 'RESET':
            return state = 0;
        default:
            return state;
    }
}

export default CounterReducer;