import React, { useState, useEffect } from "react";
import { socket } from "../SocketConnection";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [users,setUsers] =useState([]);
  const history = useHistory();

  const handleSubmit = () => {
    socket.emit("joinRoom", {
      name,
      roomId,
    });
    setName("");
    setRoomId("");
    // window.location.href = "/room";
  };

  useEffect(() => {
    socket.on("user_msg", (data) => {      // alert(data);
    });

    socket.on("users",(data)=>{
        console.log("data",data);
        setUsers(data.users);
    })
  }, [socket]);

  // console.log(roomId);

  return (
    <div className="App">
      <div className="App-header">
        <div>Welcome to Common Room</div>
        <br />
        <label>Enter Your Name: </label>
        <input
          name="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <br />
        <br />
        <label>Enter Room Id: </label>
        <input
          name="roomid"
          onChange={(event) => setRoomId(event.target.value)}
          value={roomId}
        />
        <br />
        <br />
        <button onClick={handleSubmit}> Enter Chat Room </button>
      </div>
    </div>
  );
};

export default Home;
