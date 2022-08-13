import React,{useState,useEffect} from 'react'
import { Space, Table, Tag } from 'antd';
import config from "../config";
import axios from 'axios';


const Show = () => {
    const [data,setData]=useState([]);
    

    const onChange=()=>{
      

    }
    useEffect(()=>{
        axios.get(`${config.url}/crud`).then(response=>{
          setData(response.data.data);
    
        }).catch(err=>{
          console.log(err);
        })
    
      },[])

    const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
  },
 
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
  return (
    <div>

<Table columns={columns} dataSource={data}  pagination={{ defaultPageSize: 10, onShowSizeChange:onChange, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}} />
    </div>
  )
}

export default Show