import React from 'react'
import { useEffect, useState } from "react";
import { apiHistorialServicio } from '../api/apiFactura';
import { Modal } from "react-bootstrap";
import { ListHistorial } from './ListHistorial';


export const Hoteles = ({ isOpen, onClose, user ,componet}) => {
  

  
    if (!isOpen) {
        return null;
      }

  
    
     

  return (
    <>
        <div>Hoteles</div>
       
        <Modal show={isOpen}> 
        <Modal.Header>
          <Modal.Title className="text-dark">
            ID:{user._id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {componet}
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
