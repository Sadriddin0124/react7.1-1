import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
const ModalApp = ({open, toggle, addUser, text}) => {
  return (
    <Modal isOpen={open} toggle={toggle}>
        <ModalHeader>
            <h1>Add User</h1>
        </ModalHeader>
        <ModalBody>
            <form id='form' onSubmit={addUser}>
                <input type="text" className="form-control my-2" defaultValue={text?.title} placeholder="Title"/>
                <select className='form-control' defaultValue={text?.status}>
                    <option value="open">Open</option>
                    <option value="pending">Pending</option>
                    <option value="payload">Payload</option>
                    <option value="progress">Progress</option>
                </select>
            </form>
        </ModalBody>
        <ModalFooter>
            <button className="btn btn-primary" type="submit" form="form">Save</button>
        </ModalFooter>
    </Modal>
  )
}

export default ModalApp
