import { useContext } from "react"
import { Context } from "../ContextProvider"


const useAuth = () => {
    const everything = useContext(Context);
    return everything;
}

export default useAuth;