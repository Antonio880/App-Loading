import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import fetchUser from "../components/FetchUser";

export default function TelaLogin(){
    const [user, setUser] = useState(null);
    const { register, handleSubmit, watch } = useForm();

    const username = watch("username");

    const handleLogin = async () => {
        const data = await fetchUser(username);
        setUser(data);
    };

    const style = {
        "bottom": "0",
        "position": "fixed",
        "width": "90%",
        "text-align": "center"
    }

    return (
        <form className="App" onSubmit={handleSubmit(handleLogin)}  >
            <h1 style={{fontSize: "30px", display: "flex", justifyContent: "center"}}>Login</h1>
            <input
                type="text"
                placeholder="Digite seu username do GitHub"
                value={username}
                {...register("username", { required: true })}
            />
            <button type="submit" className="buttonTask" >Buscar</button>
            {user && (
                <Link to="/ListaTarefas" state={user} style={{ textDecoration: "none", color: "inherit" }}>
                    <button className="buttonTask">Entrar</button>
                </Link>
            )}
            <footer style={style} >
                Feito por AntônioCruz©️
            </footer>
        </form>
    )
}