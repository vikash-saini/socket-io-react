import React, { useEffect, useState } from 'react'
import {socket} from '../SocketConnection';

const Room = () => {
    const [users,setUsers] =useState([]);

    useEffect(()=>{
        console.log("here");
        socket.on("users",(data)=>{
            console.log("data",data);
            setUsers(data.users);
        })
       
    },);

  return (
    <>
    <div>Room</div>
    <div>
        {
            users.map((row,index)=>{

                <div key={index}>
                    {row.name}
                </div>
            })
        }
    </div>
    </>
    
  )
}

export default Room