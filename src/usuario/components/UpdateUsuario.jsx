import React from "react";
import { FormUsuario } from "./FormUsuario"
import { Modal } from "react-bootstrap";

export const UpdateUsuario = ({ isOpen, onClose, usuarioEdit }) => {
    
    if (!isOpen) {
        return null;
      }
    return (
        <>
            <Modal show={isOpen}>
          <Modal.Header>
            <Modal.Title className="text-dark">ID: {usuarioEdit._id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormUsuario
              userProp={usuarioEdit}
              titleButton="Actualizar"
              option={2}
            ></FormUsuario>
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
