import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import useLogout from '../hooks/uselogout';
import { useNavigate } from 'react-router-dom';

function Home() {
    let logout = useLogout()
    let navigate = useNavigate()
    return <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand >React Markdown Viewer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Button variant='danger' onClick={()=>logout()}>Logout</Button>
          </Container>
        </Navbar>
        <div className='container-2'>
         <Button onClick={()=>navigate('/createmarkdown')} className='l1'><h1>Create</h1></Button>
         <Button onClick={()=>navigate('/dashboard')} className='l2'><h1>Dashboard</h1></Button>
         <Button onClick={()=>navigate('/chart')} className='l3'><h1>Chart</h1></Button>
        </div>
        </>
}

export default Home