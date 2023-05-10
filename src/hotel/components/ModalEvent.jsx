import React from 'react'
import { Modal } from "react-bootstrap";
import { AddEvent } from './AddEvent';
import { ListEvents } from './ListEvents';

export const ModalEvent = ({ isOpen, onClose, id, titleButton, option }) => {
    if (!isOpen) return null;
    if (id === undefined) return null;

    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header>
                    <Modal.Title className="text-dark">ID: {id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        option === 1 ? <AddEvent hotelAddEventId={id} /> : <ListEvents hotelListEventId={id} />
                    }
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-danger" onClick={onClose}>
                        {titleButton}
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}