import React from 'react'
import { Modal, Button } from 'semantic-ui-react'

const ConfirmModal = (props = {}) => {
  const { open, netID, name, email, closeModal, success } = props

  if (success) {
    return (
      <Modal dimmer='inverted' open={open} size="small">
        <Modal.Header style={{color: "green"}} content="You are signed in." />
        <Modal.Content>
          Name: <strong>{name}</strong>
          <br/>
          Email: <strong>{email}</strong>
          <br/>
          NetID: <strong>{netID}</strong>
        </Modal.Content>
        <Modal.Actions>
        <Button 
            content="Back to Login" 
            onClick={closeModal} 
            style={{backgroundColor: "blueviolet", color: "white"}}
        />
        </Modal.Actions>
      </Modal>
    )
  } else {
    return (
      <Modal dimmer='inverted' open={open} size="small">
        <Modal.Header style={{color: "red"}} content="Invalid NetID or Password" />
        <Modal.Content>
          Please try again.
        </Modal.Content>
        <Modal.Actions>
          <Button 
            content="Back to Login" 
            onClick={closeModal} 
            style={{backgroundColor: "blueviolet", color: "white"}}
          />
        </Modal.Actions>
      </Modal>
    )
  }
}

export default ConfirmModal

