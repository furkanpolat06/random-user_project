import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useEffect, useState } from "react";
const User = () => {
    const [userData, setUserData] = useState("");
  const GetUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUserData(data.results[0]))
      .catch((err) => console.log(err));
    }
    useEffect(()=>{
        // const timer =setInterval(GetUser, 3000)
        GetUser()
        return()=>{
            // clearInterval(timer)
        }
    },[])
  return (
    <div>
      {/* <img className="rounded-circle" src={userData?.picture?.large} alt="" /> */}
      {/* <h4>Hi, My name is</h4>
      <h1>{userData?.name?.first} {userData?.name?.last}</h1> */}
      {/* <h3>{userData?.email}</h3>
      <h4>{new Date(userData?.dob?.date).toLocaleDateString("en-US")}</h4>
      
      <h5>{userData?.phone}</h5>
      <h6>{userData?.location?.city}</h6> */}
      {/* <button className="btn btn-success" onClick={GetUser}>Get Random User </button> */}
      <Card className="p-5 container" style={{ width: '40rem' }}>
      <Card.Img  variant="top" className="rounded-circle " src={userData?.picture?.large} alt="" />
      <Card.Body>
        <Card.Title> <h4>Hi, My name is</h4>
      <h1>{userData?.name?.first} {userData?.name?.last}</h1></Card.Title>
        <Card.Text>
        <h3>{userData?.email}</h3>
      <h4>{new Date(userData?.dob?.date).toLocaleDateString("en-US")}</h4>
      
      <h5>{userData?.phone}</h5>
      <h6>{userData?.location?.city}</h6>
      
        </Card.Text>
        <Button className="btn btn-success" onClick={GetUser}>Get Random User </Button>
      </Card.Body>
    </Card>
    </div>
    
  );
};
export default User;
