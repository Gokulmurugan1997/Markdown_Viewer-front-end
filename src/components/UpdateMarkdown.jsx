import React,{useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import { FaSave } from 'react-icons/fa';
import toast from 'react-hot-toast'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function UpdateMarkdown() {
    let {id} = useParams()
    
    const [EditedMarkdown, setEditedMarkdown] = useState('');
    let[data,setData] = useState()
    let navigate = useNavigate()     
    const getDataById =async()=>{
        try {
            let res = await AxiosService.get(`${ApiRoutes.MARKDOWNFINDBYID.path}/${id}`)
            if(res)
                setData(res.data.content)
        } catch (error) {
            toast.error(error)
        }
    }
    
    useEffect(()=>{
        if(id)
        getDataById()
      })


      const updateMarkdown = async () =>{
      
          try {
              let res = await AxiosService.put(`${ApiRoutes.UPDATEMARKDOWN.path}/${id}`,{content:EditedMarkdown})
              if(res)
                toast.success("markdown updated")
              navigate('/dashboard')
          } catch (error) {
            
              toast.error(error)
          }
      }

  return <div className="container-fluid">
    <Button onClick={()=>navigate('/home')}>Back</Button>
        <div className="row">
          <div className="col-md-6 bg-light">
            <div className="p-4">
  
              <h2 style={{color:'red', textTransform:'uppercase'}}>Create New Markdown</h2>
              <br />
              <textarea
              style={{border:' solid green 2px', borderRadius:'30px'}}
                rows="20"
                value={EditedMarkdown}
                placeholder={data}
                onChange={(e) =>{setEditedMarkdown(e.target.value)}}
                
                className="form-control"
             />
              <Button onClick={updateMarkdown} className="btn btn-primary mt-3">
                <FaSave /> Update
              </Button>
              
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4">
              <h3 style={{color:'GrayText', textTransform:'uppercase'}}>Preview :~</h3>
              <hr />
              <br />
              <div className="preview-container">
                <ReactMarkdown>{EditedMarkdown}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
  }

export default UpdateMarkdown