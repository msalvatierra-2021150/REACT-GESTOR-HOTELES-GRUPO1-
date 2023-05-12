import React from "react";
import { FormDepartamentos } from "./FormDepartamentos"
import { Modal } from "react-bootstrap";

export const UpdateUsuarios = ({ isOpen, onClose, hotelEdit }) => {
    
    if (!isOpen) {
        return null;
      }
    return (
        <>
            <Modal show={isOpen}>
          <Modal.Header>
            <Modal.Title className="text-dark">ID: {hotelEdit._id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormDepartamentos
              UsuariosProp={hotelProp}
              titleButton="Actualizar"
              option={2}
            ></FormDepartamentos>
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
