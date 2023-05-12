export const isAdminHotelAuthenticated = () => {
    return isUserAuthenticated("ADMIN_HOTEL");
  };
  
  export const isAdminAppAuthenticated = () => {
    return isUserAuthenticated("ADMIN_APP");
  };

  export const isUsuarioAuthenticated = () => {
    return isUserAuthenticated("USUARIO_ROLE");
  };
  /*

Es un formato ligero de intercambio de datos.//Json
Archivo de configuración y que documenta los paquetes que depende nuestro
proyecto//Package.json
¿Qué protocolos soporta Node)s?///DNS, TCP Y HTTP
En un commit, los mensajes del commit son://Importantes y obligatorios

Una función de NodeJs, que devolverá una respuesta a una solicitud HTTP debe de
contener dos parámetros ¿Cuáles son?//req, res

  */
  export const isUserAuthenticated = (userTypes) => {
    const token = localStorage.getItem('token');
  
    if (token) {
      const [header, payload, signature] = token.split('.');
      const decodedPayload = JSON.parse(atob(payload));
      const userRole = decodedPayload.rol;
  
      // Check if userRole matches any of the userTypes
      if (Array.isArray(userTypes) && userTypes.includes(userRole)) {
        return true;
      } else if (userRole === userTypes) {
        return true;
      }
    }
  
    return false;
  };

  export const isUserLogged = () => {

    if (localStorage.getItem('token')) {
        return true;
    }

    return false;

}
  