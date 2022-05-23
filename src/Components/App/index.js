import { useState } from "react";
import axios from "axios";
export default function App() {

    const [userLoginInfo, setUserLoginInfo] = useState({ email: "", password: ""});

    async function login(e) {
        e.preventDefault();
        try {
                const data = { 
                email: userLoginInfo.email, 
                password: userLoginInfo.password};
                //const promise = await axios.post("http://localhost:5000/login", data, {headers:{ Cookie:"cookie2=valor2"}}, {withCredentials: true});
                const promise = await axios.post("http://localhost:5000/login", data, {withCredentials: true});
                console.log(promise)
                    localStorage.setItem("token", `${promise.data}`);
        } catch (e) {
            alert(e.response.data);
            setUserLoginInfo({email: "", password: ""});
        }
    } 

    return (
        <form onSubmit={login}>
        <input type="email" id="email" value={userLoginInfo.email} placeholder="E-mail" required
            onChange={(e) => setUserLoginInfo({ ...userLoginInfo, email: e.target.value })} />
        
        <input type="password" id="password" value={userLoginInfo.password} placeholder="Senha" required
            onChange={(e) => setUserLoginInfo({ ...userLoginInfo, password: e.target.value })} />

        <div>
            <button type="submit" >Entrar</button>
        </div>
    </form>
    )
}