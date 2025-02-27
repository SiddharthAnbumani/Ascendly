import { useState } from "react"
import { Card, Button, Container, Row, Col } from "react-bootstrap"

export default function BucketListItem({ascending,category}){

  const [ascends, setAscends] = useState([])

  return (
    <>
    <h1 className="title-4">Ascends</h1>
    {ascending.map((item,index)=>{
      return (
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={4}>
        <Card>
          <Card.Header>Ascend {index+1} </Card.Header>
          <Card.Body>
            {/* <Card.Title>{item}</Card.Title> */}
            <Card.Text>
              {item}
            </Card.Text>
          </Card.Body>
        </Card>
            </Col>
          </Row>
        </Container>
        )
      })}
    </>
  )
}
