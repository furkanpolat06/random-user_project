import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useEffect, useState } from "react";

const User = () => {
  const [userData, setUserData] = useState("");
  const [userList, setUserList] = useState([]);
  const [display, setDisplay]=useState((userData.email))

  const handleEmail=()=>{
    setDisplay(userData.email)
  }
  const handleBirthday=()=>{
    setDisplay(userData?.dob?.date.slice(0,10))

  }
  const handlePhone=()=>{
    setDisplay(userData.phone)

  }
  const handleLocation=()=>{
    setDisplay(userData.location.city)

  }

  const handleAdd = () => {
    
    const filter=userList.map(item=>item.id.value).includes(userData.id.value)
    if (filter) {
      alert("This user is already exist in your list ")
      
    }
    else{
      setUserList([...userList, userData]);
    }
    console.log("filter", filter);
  
  }
console.log("userlist", userList);
console.log("userdata",userData);
  const getUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUserData(data.results[0]))
      .catch((err) => console.log(err));
      console.log(userList);
  }

  useEffect(() => {
    getUser();
    
  }, []);
  useEffect(() => {
    if (userData && userData.email) {
      handleEmail();
    }
  }, [userData]);
  

  return (
    <div>
      <h1>Random User APP</h1>
      <Card id='card' className="p-5 container" >
        <Card.Img variant="top" className="rounded-circle" src={userData?.picture?.large} alt="" />
        <Card.Body>
          <Card.Title>
            <h4>Hi, My name is</h4>
            <h2>{userData?.name?.first} {userData?.name?.last}</h2>
          </Card.Title>
          <Card.Text>
 <h3>{display}</h3>
 
 <div id='icons' className='d-flex justify-content-between g-2 display-5 '>
  <div  onClick={handleEmail} className='icon  rounded-circle'>
  📧
 </div>
 <div  onClick={handleBirthday} className='icon  rounded-circle'>
  🎈
 </div>
 <div onClick={handlePhone} className='icon   rounded-circle'>
  
 📞
 </div>
 <div onClick={handleLocation} className='icon  rounded-circle'>
  
 📍
 </div>
  </div>
           
          </Card.Text>
          <Button className="btn btn-success" onClick={getUser}>Get Random User</Button>
          <Button className="btn btn-success ms-2" onClick={handleAdd}>Add User</Button>
        </Card.Body>
      </Card>
      

      <table className='table table-striped' >
        <thead>
          <tr >
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
        {userList.map((item, index) => (
          
          <tr  id='tableID' key={index}>
          <th scope="row">{index+1}</th>
          <td >{item?.name?.first}</td>
          <td >{item?.name?.last}</td>
          <td>{item?.email}</td>
        </tr>
           
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
