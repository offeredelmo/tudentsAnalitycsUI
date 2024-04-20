import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { CountAction, authReducer, typesAuth } from "./AuthReducer"

export interface AuthStateI {
    logged: boolean;
    name: string | null;
    role: string | null;
    id: string | null;
    token: string  | null;
}

export interface AuthContextType {
    state: AuthStateI;
    login: (name: string, role: string, id:string, token:string) => void;
    logout: () => void;
}

const initialState: AuthStateI = {
    logged: false,
    name: null,
    role: null,
    id: null,
    token: null,
}

const init = () => {
    console.log("me inicie")
    const userItem = localStorage.getItem("user");

    // Verifica si userItem es null antes de parsearlo.
    if (userItem === null) {
        // Si es null, significa que no hay información de usuario guardada.
        return {
            logged: false,
            name: null,
            role: null,
            id:null,
            token:null
        };
    }

    const user = JSON.parse(userItem);
    return {
        logged: true,
        name: user.name,
        role: user.role,
        id: user.id,
        token: user.token
    };

}


export const AuthProvider = ({ children }: { children: any }) => {

    const [state, dispatch] = useReducer(authReducer, initialState, init)



    const logIn = (name: string, role: string, id: string, token:string) => {

        const user = {name: name, role: role, id: id, token: token}

        const action: CountAction = {
            type: typesAuth.LOGIN,
            payload: user
        }

        localStorage.setItem("user", JSON.stringify(user))

        dispatch(action)
    }

    const logOut = () => {

        const user = {name: null, role: null, id: null, token: null}

        const action: CountAction = {
            type: typesAuth.LOGOUT,
            payload: user
        }

        localStorage.setItem("user", JSON.stringify(user))

        dispatch(action)
    }


    return (
        <AuthContext.Provider value={{ state: state, login: logIn, logout: logOut }}>
            {children}
        </AuthContext.Provider>
    )
} 