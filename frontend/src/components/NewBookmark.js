import { useState } from 'react'

import { Form, Button } from 'react-bootstrap'

export const NewBookmark = () => {

    const [name, setName] = useState()
    const [url, setUrl] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch(`${process.env.REACT_APP_URL_API}/bookmarks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "url": url
            })
        })
        setName('')
        setUrl('')
        e.target.reset()
    }

    return (
            <Form id="formNewBookMark" onSubmit={handleSubmit}>
                <Form.Group controlId="nameForm">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" vale={name}
                        onChange={event => setName(event.target.value)} />
                </Form.Group>
                <Form.Group controlId="urlForm">
                    <Form.Label>URL</Form.Label>
                    <Form.Control type="url" placeholder="Enter URL" value={url}
                        onChange={event => setUrl(event.target.value)} />
                </Form.Group>
                <Button id="buttonSubmitNew" variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
    )
}