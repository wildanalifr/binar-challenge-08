import React, { useContext } from 'react'

//Bootstrap
import { Form, Button, Card, Row, Col, InputGroup } from 'react-bootstrap'

// Context
import { PlayerContext } from '../Context/PlayerContext'

const PlayerForm = () => {
  const { state, functions } = useContext(PlayerContext)

  let { handleSubmit, handleChange } = functions
  let { nameInput, form } = state

  return (
    <div style={{ margin: '20px' }}>
      <Row>
        <Col md={8} style={{ margin: '0 auto' }}>
          <Card style={{ padding: '10px' }}>
            <h3>{nameInput === 'Submit' ? 'Add' : 'Edit'} Player</h3>
            <form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Row className="d-flex align-items-center">
                  <Col>
                    <Form.Label>Username</Form.Label>
                  </Col>
                  <Col>
                    <InputGroup className="mb-3">
                      <Form.Control type="text" name="username" value={form.username} onChange={handleChange} placeholder="Username" />
                    </InputGroup>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group className="mb-3">
                <Row className="d-flex align-items-center">
                  <Col>
                    <Form.Label>Email</Form.Label>
                  </Col>
                  <Col>
                    <InputGroup className="mb-3">
                      <Form.Control type="text" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
                    </InputGroup>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group className="mb-3">
                <Row className="d-flex align-items-center">
                  <Col>
                    <Form.Label>Experience</Form.Label>
                  </Col>
                  <Col>
                    <InputGroup className="mb-3">
                      <Form.Control type="number" min="0" name="exp" value={form.exp} onChange={handleChange} placeholder="Experience" />
                    </InputGroup>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group className="mb-3">
                <Row className="d-flex align-items-center">
                  <Col>
                    <Form.Label>Level</Form.Label>
                  </Col>
                  <Col>
                    <InputGroup className="mb-3">
                      <Form.Control type="number" min="0" name="lvl" value={form.lvl} onChange={handleChange} placeholder="Level" />
                    </InputGroup>
                  </Col>
                </Row>
              </Form.Group>

              <Row>
                <Col className="d-flex justify-content-end">
                  <Button variant="primary" type="submit">
                    {nameInput}
                  </Button>
                </Col>
              </Row>
            </form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PlayerForm
