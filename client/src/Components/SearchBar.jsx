import React, { useContext } from 'react'

//bootstrap
import { Form, Button, Card, Row, Col, InputGroup, FormControl } from 'react-bootstrap'

//context
import { PlayerContext } from '../Context/PlayerContext'

const SearchBar = () => {
  const { state, functions } = useContext(PlayerContext)

  const { formSearch } = state
  const { handleSearch } = functions

  return (
    <div>
      <Row>
        <Col md={5} style={{ margin: '10px auto 0' }}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
            <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" value={formSearch} onChange={handleSearch} />
          </InputGroup>
        </Col>
      </Row>
    </div>
  )
}

export default SearchBar
