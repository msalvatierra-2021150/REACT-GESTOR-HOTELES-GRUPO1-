import React from "react";
import { FormHabitacion } from "./FormHabitacion"
import { Modal } from "react-bootstrap";

export const UpdateHabitacion = ({ isOpen, onClose, habitacionEdit }) => {
    
    if (!isOpen) {
        return null;
      }
    return (
        <>
            <Modal show={isOpen}>
          <Modal.Header>
            <Modal.Title className="text-dark">ID: {habitacionEdit._id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormHabitacion
              habitacionProp={habitacionEdit}
              titleButton="Actualizar"
              option={2}
            ></FormHabitacion>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={onClose}>
              Cerrar
            </button>
          </Modal.Footer>
        </Modal>
        </>
    )
}
