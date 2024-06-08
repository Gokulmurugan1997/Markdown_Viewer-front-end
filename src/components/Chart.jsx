import React,{useEffect, useState} from 'react'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import toast from 'react-hot-toast'
import { Bar } from 'react-chartjs-2'
import './chartConfig'
import './Chart.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Chart() {
    let navigate = useNavigate()
    let [data, setData] = useState({
        totalMarkdowns:0,
        totalUsers:0,
    })

    let getAllData = async ()=>{
        try {
            let res = await AxiosService.get(ApiRoutes.COUNTALL.path,{
              authenticate:ApiRoutes.COUNTALL.authenticate
            })
               setData({
                totalMarkdowns:res.data.totalCount,
                totalUsers:res.data.totalUsers
            })
            
        } catch (error) {
          toast.error(error.response.data.message || error.message)
          if(error.response.data.message=="token expired"){
            navigate('/login')
        }
    }
  }
    useEffect(()=>{
        getAllData()
    }, [])

    const chartData = {
        labels: ['Markdown Documents', 'Users'],
        datasets: [
          {
            label: '',
            data: [data.totalMarkdowns, data.totalUsers],
               backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 0, 0, 0.2)'],
               borderColor: ['rgba(75, 192, 192, 1)','rgba(255, 0, 0, 1)'],
               borderWidth: 1,
               barThickness: 100,
          },
        ],
      };
    
      const chartOptions = {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
                stepSize: 1, 
                precision: 0, 
              },
              
          },
        },
        plugins: {
            legend: {
              display: false,
            },
        }
      };
    

  return <div>
    <h1 className='chart-title'>React Chart</h1>
    <div className="chart-container">
      <Bar data={chartData} options={chartOptions} />
    </div>
      <Button onClick={()=>navigate("/home")}>Back</Button>
    </div>
  


  
}

export default Chart