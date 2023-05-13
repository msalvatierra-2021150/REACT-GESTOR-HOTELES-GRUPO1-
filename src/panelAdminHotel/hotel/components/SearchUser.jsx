import { useEffect, useState } from "react";
import { apiBuscarUsuario, apiUsuarioEnHotel } from "../api/apiHotel";
import { Link } from "react-router-dom";

export const SearchUser = ({ term }) => {

    const [userList, setUserList] = useState([]);
    const [resultadoList, setResultadoList] = useState([]);

    const viewUserList = async () => {
        const getUserFromApi = await apiBuscarUsuario(term);
        setUserList(getUserFromApi);
    }

    const viewResulList = async () => {
        const getUserByHotelFromApi = await apiUsuarioEnHotel();
        setResultadoList(getUserByHotelFromApi);
    }

    const a = () => {
        if (userList.length > 0) {
            return (
                userList.map((u) => {
                    console.log(u._id)
                    viewResulList(u._id)

                    console.log(resultadoList)
                })
            )
        }
    }

    useEffect(() => {
        viewUserList();
    }, []);

    return (
        <>
            <h3>Usuarios:</h3>
            <section className="contenedor seccion">
                {
                    !userList.length > 0 ? (
                        <article >
                            <h3>Resultado no encontrado</h3>
                        </article>
                    ) : (

                        userList.map((u) => {

                            return (
                                <article className="entrada-blog container" key={u._id}>

                                    <div className="texto-entrada row">
                                        
                                        <div className="col">

                                            <h4 >{u.nombre}</h4>
                                            <p >
                                                Id: {u._id}
                                                <br />
                                                Correo: {u.correo}
                                                <br />
                                                Rol: {u.rol}
                                            </p>
                                            <p >
                                                <Link to="/usuario-reservas"
                                                    className="boton boton-verde mt-3"
                                                    state={u._id}
                                                >
                                                    Ver reservaciones
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </article>

                            )
                        })

                    )
                }
            </section>
        </>
    )
}
