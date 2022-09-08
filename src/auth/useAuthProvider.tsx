import fakeAuth from "./fakeAuth";
import { useState } from 'react'

export interface IUserAutherProvider {
    signIn: () => void;
    signOut: () => void;
    user: null|string;
}
const useAuthProvider = ():IUserAutherProvider => {
    const [user, setUser] = useState<null | string>(null);
    const signIn = (() => {
        fakeAuth.signIn(() => {
            setUser('Por')
        })
    })
    const signOut = (() => {
        fakeAuth.signOut(() => {
            setUser(null)
        })
    })

    return {
        user,
        signIn,
        signOut
    }
}
export default useAuthProvider