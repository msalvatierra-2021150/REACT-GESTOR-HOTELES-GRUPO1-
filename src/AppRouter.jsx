import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Login } from "./login/components/Login";
import { ListHotel } from "./hotel/components/ListHotel";
import { CreateHotel } from "./hotel/components/CreateHotel";
import {
  isAdminAppAuthenticated,
  isAdminHotelAuthenticated,
  isUserLogged,
  isUsuarioAuthenticated,
} from "./login/helpers/isUserAuthenticated";
import { Home } from "./home/components/Home";
import { PanelAdminApp } from "./panelAdminApp/components/PanelAdminApp";
import { PanelAdminHotel } from "./panelAdminHotel/components/PanelAdminHotel";
import ListFactura from "./Factura/components/ListFactura";
import { ListEvento } from "./panelAdminHotel/components/Evento/components/ListEvento";
import { CreateEvento } from "./panelAdminHotel/components/Evento/components/CreateEvento";
import { ListCarrServicios } from "./home/components/carritoServicio/components/ListCarrServicios";

import { ListCarr } from "./home/components/carritoServicio/components/ListCarr";
import { SimpleBarras } from "./panelAdminApp/components/graficas/components/SimpleBarras";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Generales*/}
        {/* Chequea si  el usuario esta logeado o no*/}
        <Route
          path="/login"
          element={!isUserLogged() ? <Login /> : <Navigate to="/home" />}
        ></Route>
        {/* --------------------------------------------------- */}
        {/* RUTAS SOLO PARA ADMIN_APP*/}
        {/* FUNCIONES DEL ADMIN_APP EN HOTEL*/}
        <Route
          path="/graficas"
          element={
            isAdminAppAuthenticated() ? (
              <SimpleBarras />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>

        <Route
          path="/panel-adminapp"
          element={
            isAdminAppAuthenticated() ? (
              <PanelAdminApp />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        {/* Chequea si es ADMIN_APP para redirigirlo al panel de control Hotel*/}
        <Route
          path="/hoteles"
          element={
            isAdminAppAuthenticated() ? <ListHotel /> : <Navigate to="/login" />
          }
        ></Route>
        {/* Chequea si es ADMIN_APP para redirigirlo al agregar Hotel*/}
        <Route
          path="/create-hotel"
          element={
            isAdminAppAuthenticated() ? (
              <CreateHotel />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        {/* --------------------------------------------------- */}
        {/* RUTAS SOLO PARA ADMIN_HOTEL*/}
        <Route
          path="/panel-adminhotel"
          element={
            isAdminHotelAuthenticated() ? (
              <PanelAdminHotel />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        {/* FUNCIONES DEL ADMIN_HOTEL EN SERVICIOS */}
      

        <Route
          path="/list-evento"
          element={
            isAdminHotelAuthenticated() ? (
              <ListEvento />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>

        <Route
          path="/create-evento"
          element={
            isAdminHotelAuthenticated() ? (
              <CreateEvento />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        {/* --------------------------------------------------- */}
        {/* RUTAS SOLO PARA USUARIOS*/}
        {/* FUNCIONES DEL USUARIO AL LOGEARSE*/}
        <Route
          path="/home"
          element={
            isUsuarioAuthenticated() ? <Home /> : <Navigate to="/login" />
          }
        ></Route>

        <Route
          path="/carrito-servicios"
          element={
            isUsuarioAuthenticated() ? <ListCarrServicios /> : <Navigate to="/login" />
          }
        ></Route>

        <Route
          path="/carrito"
          element={
            isUsuarioAuthenticated() ? <ListCarr /> : <Navigate to="/login" />
          }
        ></Route>
        {/*CUALQUIERA*/}
        <Route
          path="/factura"
          element={
            isAdminAppAuthenticated() ||
              isAdminHotelAuthenticated() ||
              isUsuarioAuthenticated ? (
              <ListFactura />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
      </Routes>
    </>
  );
};
