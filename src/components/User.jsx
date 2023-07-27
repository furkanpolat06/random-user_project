import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useEffect, useState } from "react";

const User = () => {
  const [userData, setUserData] = useState("");
  const [userList, setUserList] = useState([]);

  const handleAdd = () => {
    setUserList([...userList, userData]);
  }
console.log(userList);
  const GetUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUserData(data.results[0]))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    GetUser();
  }, []);

  return (
    <div>
      <Card id='card' className="p-5 container" style={{ width: '40rem' }}>
        <Card.Img variant="top" className="rounded-circle" src={userData?.picture?.large} alt="" />
        <Card.Body>
          <Card.Title>
            <h4>Hi, My name is</h4>
            <h1>{userData?.name?.first} {userData?.name?.last}</h1>
          </Card.Title>
          <Card.Text>
            <h3>{userData?.email}</h3>
            <h4>{new Date(userData?.dob?.date).toLocaleDateString("en-US")}</h4>
            <h5>{userData?.phone}</h5>
            <h6>{userData?.location?.city}</h6>
          </Card.Text>
          <Button className="btn btn-success" onClick={GetUser}>Get Random User</Button>
          <Button className="btn btn-success ms-2" onClick={handleAdd}>Add User</Button>
        </Card.Body>
      </Card>
      

      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
        {userList.map((item, index) => (
          <tr key={index}>
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
