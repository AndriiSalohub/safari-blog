export const pathReducer = (state = {}, action) => {
    switch (action.type) {
        case "DETECT_PATH":
            return {
                ...state,
                1: action.path,
            };
        default:
            return state;
    }
};
