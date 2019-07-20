import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewNote(props) {
    return (
        <Form className='App'>
            <Form.Label>New note</Form.Label>
            <Form.Control type='text' placeholder='Enter your new note here' onChange={props.handleChange}></Form.Control>
            <Button variant="primary" size="lg" onClick={props.handleClick}>Submit</Button>
        </Form>
    );

}

export default NewNote;