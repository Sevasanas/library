const initialState = {
    show: false,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (PROFILE_CHANGE_SHOW) : {
            return {
                ...state,
                show: !state.show
            };
        }
        default:
            return state;
    }
};