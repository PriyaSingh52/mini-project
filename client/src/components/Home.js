import React from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Home() {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
      <div className="d-flex justify-content-lg-start">  <h2>School List</h2></div>
        
       <div className="d-flex justify-content-end"> <button className="btn btn-success">Add data</button></div>
        </div>
        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">Username</th>
              <th scope="col">email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <>
              <tr>
                <th scope="row">1</th>
                <td>meet</td>
                <td>meet@gmail.com</td>
                <td>webdeveloper</td>
                <td>1234567890</td>
                <td className="d-flex justify-content-between">
                  <button  className="btn btn-success">read</button>
                    <button className="btn btn-primary">update</button>
                    <button className="btn btn-danger" >Delete</button>

                    {/* <button className="btn btn-primary"><RemoveRedEyeIcon/> </button>
                  <button className="btn btn-primary"><CreateIcon /></button>
                  <button className="btn btn-danger"><DeleteOutlineIcon /></button> */}

                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Test</td>
                <td>test@gmail.com</td>
                <td>webdeveloper</td>
                <td>1234567890</td>
                <td className="d-flex justify-content-between">
                <button className="btn btn-primary"><RemoveRedEyeIcon/> </button>
                  <button className="btn btn-primary"><CreateIcon /></button>
                  <button className="btn btn-danger"><DeleteOutlineIcon /></button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Anshu</td>
                <td>anshu@gmail.com</td>
                <td>webdeveloper</td>
                <td>1234567890</td>
                <td className="d-flex justify-content-between">
                <button className="btn btn-primary"><RemoveRedEyeIcon/> </button>
                  <button className="btn btn-primary"><CreateIcon /></button>
                  <button className="btn btn-danger"><DeleteOutlineIcon /></button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Priya</td>
                <td>priya@gmail.com</td>
                <td>webdeveloper</td>
                <td>1234567890</td>
                <td className="d-flex justify-content-between">
                <button className="btn btn-primary"><RemoveRedEyeIcon/> </button>
                  <button className="btn btn-primary"><CreateIcon /></button>
                  <button className="btn btn-danger"><DeleteOutlineIcon /></button>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Jenny</td>
                <td>jenny@gmail.com</td>
                <td>webdeveloper</td>
                <td>1234567890</td>
                <td className="d-flex justify-content-between">
                <button className="btn btn-primary"><RemoveRedEyeIcon/> </button>
                  <button className="btn btn-primary"><CreateIcon /></button>
                  <button className="btn btn-danger"><DeleteOutlineIcon /></button>
                </td>
              </tr>
            </>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
