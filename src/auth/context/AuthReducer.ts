

export enum typesAuth {
    LOGIN = 1,
    LOGOUT = 2
}

export interface CountAction {
    type: typesAuth;
    payload: any;
}


export const authReducer = (state:any, action: CountAction) => {

    const { type, payload } = action

    switch (type) {

        case typesAuth.LOGIN:
            return { ...state, 
                logged: true, 
                name: payload.name, 
                role: payload.role, 
                id: payload.id, 
                token: payload.token}
            break;

        case typesAuth.LOGOUT:
            return { ...state, 
                logged: false, 
                name: payload.name, 
                role: payload.role, 
                id: payload.id}
            break;
            
        default:
            return state
            break;
    }
}   