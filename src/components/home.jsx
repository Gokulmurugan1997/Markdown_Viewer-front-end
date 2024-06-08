import React,{useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import useLogout from '../hooks/uselogout';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import toast from 'react-hot-toast'
function Home() {
    let logout = useLogout()
    let navigate = useNavigate()

    let welcomeHome = async()=>{
      try {
        let res = await AxiosService.get(ApiRoutes.COUNTALL.path,{
          authenticate:ApiRoutes.COUNTALL.authenticate
        })
        
      } catch (error) {
        toast.error(error.response.data.message || error.message)
        if(error.response.data.message=="token expired"){
          navigate('/login')
        }
      }
    }
    useEffect(()=>{
      welcomeHome()
    },[])

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