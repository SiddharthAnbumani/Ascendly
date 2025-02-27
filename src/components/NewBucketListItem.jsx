import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Form, Button} from 'react-bootstrap';

import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import AscendContext from "./AscendContext"


export default function NewBucketListItem(){

    const navigate = useNavigate()

    const {
        ascend,
        setAscend,
        ascends,
        setAscends,
        category,
        setCategory
    } = useContext(AscendContext)

    const handleAddAscend = (evt)=>{
        evt.preventDefault()
        setAscends(prevAscends =>[...ascends,ascend])
        console.log(ascends)
        setAscend('')
        navigate("/show")
    
    }

    return(
    
    <Container className=''>
    <Form onSubmit={handleAddAscend} className="p-4">
      
    <Row>
        <Col md={8}>
            <Form.Group className="mb-3">
            <Form.Label>Ascends: </Form.Label>
            <Form.Control
            type="text"
            value={ascend}
            onChange={(e) => setAscend(e.target.value)}
            />
      </Form.Group>
    </Col>
</Row>

    <Row className = 'd-flex justify-content-start'>
        <Col md ={6}>
        <Form.Group>
            <Form.Label> Category: </Form.Label>
            <Form.Select> 
                <option 
                    value='select'>
                        --select--
                </option>

                <option 
                    value="Travel & Adventure">
                        Travel & Adventure
                </option>

                <option 
                    value="Personal Growth">
                        Personal Growth 
                </option>
                <option 
                        value="Health & Fitness">
                        Health & Fitness
                </option>
            </Form.Select>
        </Form.Group>
        </Col>
    
    </Row>
        
    <Form.Group className='mt-3'>
    <Button variant="warning" type="submit">
            Submit
        </Button>
    </Form.Group>
    </Form>
    </Container>
    
    )
}