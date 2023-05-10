import React, { useState } from 'react'
import { apiSearchHotel } from '../api/apiSearchHotel';
import { ListHotelSearch } from './ListHotelSearch';

export const SearchHotel = () => {
    const [hotels, setHotels] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({ target }) => setInputValue(target.value);

    const onSubmitEvent = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) return;
        setInputValue('');
        searchHotel(inputValue);
    }

    const searchHotel = async (name) => {
        const response = await apiSearchHotel(name);
        setHotels(response);
    }


    return (
        <>
            <form onSubmit={onSubmitEvent} aria-label="form">
                <div className="col-auto">
                    <p>Ingrese el nombre del hotel a buscar: </p>
                </div>
                <div className="col-auto">
                    <input type="text"
                        placeholder="Ingrese el hotel a buscar"
                        value={inputValue}
                        onChange={onInputChange}
                    />
                </div>
            </form>
            <div className="row">
                {(hotels.length > 0) ? <ListHotelSearch arrayHotel={hotels} /> : <p>Aqui se mostraran las mejores coincidencias</p>}
            </div>
        </>
    )
}
