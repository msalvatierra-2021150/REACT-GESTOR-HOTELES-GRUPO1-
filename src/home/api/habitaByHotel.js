import axios from "axios";

const token = localStorage.getItem("token");
const especificURL = "http://localhost:8080/api/habitaciones/hotel/"
const buscarURL = "http://localhost:8080/api/buscar/hoteles/"
const eventsByHotelURL= "http://localhost:8080/api/hoteles/eventosH/"

export const habitByHotel = async (id) => {

    try {

        const { data: { listaHabitacionesHotel } } = await axios.get(`${especificURL}${id}`,
            { headers: { "x-token": token } });
        //console.log(listaHabitacionesHotel)
        return listaHabitacionesHotel;

    } catch ({ response: { data: { msg } } }) {
        return data.msg;
    }

}

export const buscarHotel = async (term) => {
    try {

        const { data: { results } } = await axios.get(`${buscarURL}${term}`,
            //{ headers: { "x-token": token } }
            );
        //console.log(results)
        return results;

    } catch ({ response: { data: { msg } } }) {
        return data.msg;
    }
}

export const eventByHotel = async (id) => {
    try {

        const { data: { eventos } } = await axios.get(`${eventsByHotelURL}${id}`,
            //{ headers: { "x-token": token } }
            );
        
        return eventos;

    } catch ({ response: { data: { msg } } }) {
        return data.msg;
    }
}