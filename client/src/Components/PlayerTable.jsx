import React, { useContext } from 'react'
import { Table, Button, Card, Row, Col } from 'react-bootstrap'

// Context
import { PlayerContext } from '../Context/PlayerContext'

const PlayerTable = () => {
  const { state, functions } = useContext(PlayerContext)

  let { handleEdit, handleDelete, handleExp, handleLvl } = functions
  let { player, nameInput, form } = state

  return (
    <div style={{ margin: '15px' }}>
      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Experience</th>
                <th scope="col">Level</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {player.length > 0 &&
                player.map((pl, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{pl.username}</td>
                      <td>{pl.email}</td>
                      <td>{pl.exp}</td>
                      <td>{pl.lvl}</td>
                      <td>
                        <button className="btn btn-warning" onClick={() => handleEdit(index)}>
                          Edit
                        </button>
                        <button style={{ marginLeft: '10px' }} className="btn btn-danger" onClick={() => handleDelete(index)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                })}
              {player.length <= 0 && (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center' }}>
                    No data
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  )
}

export default PlayerTable
