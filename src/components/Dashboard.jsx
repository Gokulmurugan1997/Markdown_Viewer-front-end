import React,{useEffect, useState} from 'react'
import { Table } from 'react-bootstrap'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function Dashboard() {
    let[data, setData] = useState([])
    let navigate = useNavigate()
    const getData = async()=>{
        try {
            let res = await AxiosService.get(ApiRoutes.MARKDOWNLIST.path)
            
                setData(res.data)
            
        } catch (error) {
            toast.error(error.response.data.message || error.message)
        }
            
    }
    useEffect(()=>{
        getData()
    },[])

    let handleDelete = async (id)=>{
        try {
            let res = await AxiosService.delete(`${ApiRoutes.DELETEMARKDOWN.path}/${id}`)
            if(res){
                toast.success("markdown deleted")
            }
        } catch (error) {
            toast.error(error.response.data.message || error.message)
        }
    }
  return <div className='wrapper'>
    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Id</th>
                <th>Content</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((e,i)=>{
                    return <tr key={i}>
                        <td>{i+1}</td>
                        <td>{e._id}</td>
                        <td>{e.content}</td>
                        <td><Button onClick={()=>navigate(`/updateMarkdown/${e._id}`)}>Edit</Button></td>
                        <td><Button variant='danger' onClick={()=>handleDelete(e._id)}>del</Button></td>
                    </tr>
                    
                })
            }
        </tbody>
    </Table>
    <Button onClick={()=>navigate('/home')}>Back</Button>
  </div>
  
}

export default Dashboard