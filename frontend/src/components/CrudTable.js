import { useState, useEffect } from 'react'

import { Table, Button, Spinner } from 'react-bootstrap'
import { BiTrashAlt, BiPencil } from 'react-icons/bi'


import { EditBookmark } from './EditBookmark'


export const CrudTable = () => {

    const [regs, setRegs] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [seeUpdate, setSeeUpdate] = useState(false)
    const [toUpdate, setToUpdate] = useState({})

    const getRegs = async () => {
        const data = await fetch(`${process.env.REACT_APP_URL_API}/bookmarks`)
        const regs = await data.json()
        setRegs(regs)
        setIsLoaded(true)
    }

    const deleteOneReg = async (id) => {
        console.log(id)
        await fetch(`${process.env.REACT_APP_URL_API}/bookmarks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: id,
            })
        })
        getRegs()
    }

    const showEdit = (id, name, url) => {
        seeUpdate ? setSeeUpdate(false) : setSeeUpdate(true)
        setToUpdate({id : id, name: name, url: url})
    }


    useEffect(() => {
        getRegs()
    }, [])

    return (
        <div id="crud">
            {/* SWITCH CASE TO REPLACE ONE COMPONENT WITH OTHER, CREATE NEW BOOKMARK COMPONENT*/}
            {!isLoaded ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                :
                <Table responsive striped bordered hover variant="dark" size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>URL</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {regs.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.url}</td>
                                <td className="actions">
                                    <Button variant="success" className="buttonCrud" value={item.id} onClick={() => showEdit(item.id, item.name, item.url)}>
                                        <BiPencil />
                                    </Button>
                                    <Button variant="danger" className="buttonCrud" value={item.id} onClick={() => deleteOneReg(item.id)}>
                                        <BiTrashAlt />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            }
            {seeUpdate ? <EditBookmark id={toUpdate.id} name={toUpdate.name} url={toUpdate.url} getRegs={getRegs} setSeeUpdate={setSeeUpdate}/> : ''}
        </div>
    )
}