import { useState } from 'react'

import { Form, Button } from 'react-bootstrap'

export const EditBookmark = (props) => {

    const [name, setName] = useState(props.name)
    const [url, setUrl] = useState(props.url)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch(`${process.env.REACT_APP_URL_API}/bookmarks/${props.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name" : name,
                "url" : url
            })
        })
        setName('')
        setUrl('')
        props.getRegs()
        props.setSeeUpdate(false)
    }

    return (
        <Form id="formNewBookMark" onSubmit={handleSubmit}>
            <Form.Group controlId="nameForm">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" vale={name} defaultValue={name}
                                onChange={event => setName(event.target.value)}/>
            </Form.Group>
            <Form.Group controlId="urlForm">
                <Form.Label>URL</Form.Label>
                <Form.Control type="url" placeholder="Enter URL" value={url} 
                                onChange={event => setUrl(event.target.value)}/>
            </Form.Group>
            <Button id="buttonSubmitNew" variant="primary" type="submit" >
                Update
            </Button>
        </Form>
    )
}