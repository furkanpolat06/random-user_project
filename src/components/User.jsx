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
      <img className="rounded-circle" src={userData?.picture?.large} alt="" />
      <h4>Hi, My name is</h4>
      <h1>{userData?.name?.first} {userData?.name?.last}</h1>
      <h3>{userData?.email}</h3>
      <h4>{new Date(userData?.dob?.date).toLocaleDateString("en-US")}</h4>
      
      <h5>{userData?.phone}</h5>
      <h6>{userData?.location?.city}</h6>
      <button className="btn btn-success" onClick={GetUser}>Get Random User </button>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
      
      
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    
  );
};
export default User;
