import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./NavBar"
import { Login } from "./login/components/Login"
import { ListHotel } from "./hotel/components/ListHotel"

import { CreateHotel } from "./hotel/components/CreateHotel"
import { isAdminAppAuthenticated, isAdminHotelAuthenticated, isUserLogged, isUsuarioAuthenticated } from "./login/helpers/isUserAuthenticated"
import { ListServicios } from "./servicios/components/ListServicios"
import { Home } from "./home/components/home"
import { PanelAdminApp } from "./panelAdminApp/components/PanelAdminApp"
import { PanelAdminHotel } from "./panelAdminHotel/components/PanelAdminHotel"
import { UserListHotel } from "./home/components/UserListHotel"
import { UserListHabita } from "./home/components/UserListHabita"
import { UserEventList } from "./home/components/UserEventList"
import { ListHabita } from "./hotel/components/ListHabita"
import { ListReservas } from "./hotel/components/ListReservas"
import { ReservaUser } from "./hotel/components/ReservaUser"

export const AppRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                {/* Generales*/}
                {/* Chequea si  el usuario esta logeado o no*/}
                <Route path="/login" element={!isUserLogged() ? <Login/> : <Navigate to="/home" />}>
                </Route>

                {/* RUTAS SOLO PARA ADMIN_APP*/}
                {/* FUNCIONES DEL ADMIN_APP EN HOTEL*/}
                <Route path="/panel-adminapp" element={isAdminAppAuthenticated() ? (<PanelAdminApp />) : (<Navigate to="/login" />) } >
                </Route>
                    {/* Chequea si es ADMIN_APP para redirigirlo al panel de control Hotel*/}
                <Route path="/hoteles" element={isAdminAppAuthenticated() ? (<ListHotel />) : (<Navigate to="/login" />) } >
                </Route>
                    {/* Chequea si es ADMIN_APP para redirigirlo al agregar Hotel*/}
                <Route path="/create-hotel" element={isAdminAppAuthenticated() ? (<CreateHotel />) : (<Navigate to="/login" />) } >
                </Route>
                
                {/* RUTAS SOLO PARA ADMIN_HOTEL*/}
                <Route path="/panel-adminhotel" element={isAdminHotelAuthenticated() ? (<PanelAdminHotel/>) : (<Navigate to="/login" />) } >
                </Route>
                <Route path="/lista-hoteles" element={isAdminHotelAuthenticated() ? (<ListHotel/>) : (<Navigate to="/login" />) } >
                </Route>
                <Route path="/lista-habitaciones" element={isAdminHotelAuthenticated() ? (<ListHabita/>) : (<Navigate to="/login" />) } >
                </Route>
                <Route path="/lista-reservas" element={isAdminHotelAuthenticated() ? (<ListReservas/>) : (<Navigate to="/login" />) } >
                </Route>
                <Route path="/usuario-reservas" element={isAdminHotelAuthenticated() ? (<ReservaUser/>) : (<Navigate to="/login" />) } >
                </Route>
                {/* FUNCIONES DEL ADMIN_HOTEL EN SERVICIOS */}
                <Route path="/servicios" element={isAdminHotelAuthenticated() ? (<ListServicios/>) : (<Navigate to="/login" />) } >
                </Route>

                {/* RUTAS SOLO PARA USUARIOS*/}
                {/* FUNCIONES DEL USUARIO AL LOGEARSE*/}
                <Route path="/home" element={isUsuarioAuthenticated() ? (<Home/>) : (<Navigate to="/login" />) } >
                </Route>
                <Route path="/hoteles-lista" element={isUsuarioAuthenticated() ? (<UserListHotel/>) : (<Navigate to="/login" />) } >
                </Route>
                <Route path="/habitaciones-lista" element={isUsuarioAuthenticated() ? (<UserListHabita/>) : (<Navigate to="/login" />) } >
                </Route>
                <Route path="/eventos-lista" element={isUsuarioAuthenticated() ? (<UserEventList/>) : (<Navigate to="/login" />) } >
                </Route>
            </Routes>
        </>
    )
}
