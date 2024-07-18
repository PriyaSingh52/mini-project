import React, { useState } from "react";
import { NavLink } from "react-router-dom";



function AddSchool() {

    const [inpval, setINP] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        add: "",
        desc: ""
      });
    
      const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
          return {
            ...preval,
            [name]: value
          };
        });
      };    
  return (
    <div className="container">
    <NavLink to="/">home2</NavLink>
    <form className="mt-5">
      <div className="row">
        <div className="form-group col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="text"
            value={inpval.name}
            onChange={setdata}
            name="name"
            className="form-control"
            id="exampleInputName"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputEmail">Email</label>
          <input
            type="email"
            value={inpval.email}
            onChange={setdata}
            name="email"
            className="form-control"
            id="exampleInputEmail"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputAge">Age</label>
          <input
            type="text"
            value={inpval.age}
            onChange={setdata}
            name="age"
            className="form-control"
            id="exampleInputAge"
            placeholder="Enter age"
          />
        </div>
        <div className="form-group col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputMobile">Mobile</label>
          <input
            type="number"
            value={inpval.mobile}
            onChange={setdata}
            name="mobile"
            className="form-control"
            id="exampleInputMobile"
            placeholder="Enter mobile number"
          />
        </div>
        <div className="form-group col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputWork">Work</label>
          <input
            type="text"
            value={inpval.work}
            onChange={setdata}
            name="work"
            className="form-control"
            id="exampleInputWork"
            placeholder="Enter work"
          />
        </div>
        <div className="form-group col-lg-6 col-md-6 col-12">
          <label htmlFor="exampleInputAddress">Address</label>
          <input
            type="text"
            value={inpval.add}
            onChange={setdata}
            name="add"
            className="form-control"
            id="exampleInputAddress"
            placeholder="Enter address"
          />
        </div>
        <div className="mb-3 col-lg-12 col-md-12 col-12">
          <label htmlFor="exampleInputDesc">Description</label>
          <textarea
            name="desc"
            value={inpval.desc}
            onChange={setdata}
            className="form-control"
            id="exampleInputDesc"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default AddSchool
