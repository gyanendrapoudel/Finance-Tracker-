import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {  useUser } from '../context/UserContext'

export const  CustomModal=({children})=>{
 const {show,toggleModal } = useUser()
  return (
    <>
      <Modal
        show={show}
        onHide={() => toggleModal(false)}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  )
}
