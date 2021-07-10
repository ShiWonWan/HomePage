import { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'


import { CrudTable } from './CrudTable'
import { NewBookmark } from './NewBookmark'
import { Button } from 'react-bootstrap'
import { BiHome } from 'react-icons/bi'


export const Crud = () => {

    const [componentVisible, setComponentVisible] = useState('New Bookmark')

    const openNewBookmark = () => {
        
        componentVisible === 'Return to CRUD' ? 
        setComponentVisible('New Bookmark') : 
        setComponentVisible('Return to CRUD')
    }

    const componentToRender = () => {
        switch (componentVisible) {
            case 'New Bookmark':
                return <CrudTable />
            case 'Return to CRUD':
                return <NewBookmark />
            default:
                break
        }
    }

    return (
        <Fragment>
            {document.title="CRUD"}
            <h1 className="text-center text-white crudInitial">CRUD | Bookmarks</h1>
            {componentToRender()}
            <Button id="toShow" variant="info" className="buttonCrud" onClick={openNewBookmark}>
                {componentVisible}
            </Button>
            <br />
            <div className="text-center">
                <Link to="/" className="btn btn-secondary ruta">GO <BiHome /></Link>
            </div>
            
        </Fragment>
    )
}