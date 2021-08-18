import * as types from './types'

const initState = {
    data: 0
}

export const counterReducer = (state = initState, action) => {

    switch (action.type) {
        case types.COUNTER_INCREMENT:
            return {
                ...state,
                data: state.data + 1
            };
            break;
        case types.COUNTER_DECREMENT:
            return {
                ...state,
                data: state.data - 1
            };
            break;
    }
    return state;
}


