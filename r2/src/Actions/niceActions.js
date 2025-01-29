import * as types from '../Constants/nice';

export const add1 = _ => {
    return {
        type: types.ADD1
    };
}

export const rem1 = _ => {
    return {
        type: types.REM1
    };
}

export const add = payload => {
    return {
        type: types.ADD,
        payload: parseInt(payload)
    };
}

export const multi = payload => {
    return {
        type: types.MULTI,
        payload: parseInt(payload)
    };
}

export const reset = _ => {
    return {
        type: types.RESET
    };
}

export const add5 = _ => {
    return {
        type: types.ADD5
    };
}