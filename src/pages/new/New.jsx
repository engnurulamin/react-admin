import React from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="new-conatiner">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="form-input">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="form-input">
                <label>Username</label>
                <input type="text" placeholder="nurulamin" />
              </div>
              <div className="form-input">
                <label>Name and Surname</label>
                <input type="text" placeholder="Nurul Amin" />
              </div>
              <div className="form-input">
                <label>Email</label>
                <input type="email" placeholder="amin24@gmail.com" />
              </div>
              <div className="form-input">
                <label>Phone</label>
                <input type="text" placeholder="+88 01756 683454" />
              </div>
              <div className="form-input">
                <label>Passowrd</label>
                <input type="passowrd" placeholder="Enter Password" />
              </div>
              <div className="form-input">
                <label>Address</label>
                <input type="text" placeholder="Address" />
              </div>
              <div className="form-input">
                <label>Country</label>
                <input type="text" placeholder="Country" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
