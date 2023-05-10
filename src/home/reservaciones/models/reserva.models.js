export const Reserva = {
    _id: "",
    usuario: "",
    idHabitacion: "",
    fechaStart: new Date().toISOString().slice(0, 10),
    horaStart: new Date().toLocaleTimeString({ hour12: false }),
    fechaEnd: new Date().toISOString().slice(0, 10),
    horaEnd: new Date().toLocaleTimeString({ hour12: false }),
};