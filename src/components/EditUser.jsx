import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  //   alert(id);

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/user/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:5000/user/${id}`);
    // console.log(result.data);
    setUser(result.data);
  };

  return (
    <div className="main-form-div">
      <h1>Edit user</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Name"
            name="name"
            value={user.name}
            onChange={(e) => {
              onInputChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Username"
            name="username"
            value={user.username}
            onChange={(e) => {
              onInputChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Email"
            name="email"
            value={user.email}
            onChange={(e) => {
              onInputChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your phone Number"
            name="phone"
            value={user.phone}
            onChange={(e) => {
              onInputChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Website Name"
            name="website"
            value={user.website}
            onChange={(e) => {
              onInputChange(e);
            }}
          />
        </div>
        <button className="btn btn-warning btn-block">Update User</button>
      </form>
    </div>
  );
};

export default EditUser;
