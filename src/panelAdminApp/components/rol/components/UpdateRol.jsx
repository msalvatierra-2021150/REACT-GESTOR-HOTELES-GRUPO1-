import React from "react";
import { FormRol } from "./FormRol"
import { Modal } from "react-bootstrap";

export const UpdateRol = ({ isOpen, onClose, rolEdit }) => {
    
    if (!isOpen) {
        return null;
      }
    return (
        <>
            <Modal show={isOpen}>
          <Modal.Header>
            <Modal.Title className="text-dark">ID: {rolEdit._id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormRol
              rolProp={rolEdit}
              titleButton="Actualizar"
              option={2}
            ></FormRol>
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
