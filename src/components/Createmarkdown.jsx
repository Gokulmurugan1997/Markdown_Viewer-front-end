import React,{useState} from 'react'
import ReactMarkdown from 'react-markdown'
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import { FaSave } from 'react-icons/fa';
import toast from 'react-hot-toast'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CreateMarkdown() {
  const [newMarkdownContent, setNewMarkdownContent] = useState('');
  let navigate = useNavigate()
    const createMarkdown = async () =>{
      
        try {
            let res = await AxiosService.post(ApiRoutes.CREATEMARKDOWN.path,{content:newMarkdownContent})
            if(res)
              toast.success("markdown created")
            navigate('/home')
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
              value={newMarkdownContent}
              onChange={(e) =>{setNewMarkdownContent(e.target.value)}}
              
              className="form-control"
            />
            <Button onClick={createMarkdown} className="btn btn-primary mt-3">
              <FaSave /> Save
            </Button>
            
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4">
            <h3 style={{color:'GrayText', textTransform:'uppercase'}}>Preview :~</h3>
            <hr />
            <br />
            <div className="preview-container">
              <ReactMarkdown>{newMarkdownContent}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
}
export default CreateMarkdown