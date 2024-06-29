import React, { useState, useContext } from "react"
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext"; 


export default function Login(){
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   

    const backgroundStyles = {
      background: `url('./images/background.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      height: "640px",
       
    };
    function checkData(e) {
        e.preventDefault();
        const newUser = {
            username,
            password,
           
        };

        
        try {
            axios.post("http://localhost:8070/user/get/login", newUser).then((res) => {
                if (res.data === "exist") {
                    setUser({ username}); 
                    navigate("/addproduct");
                    
                } else if (res.data === "notexist") {
                    alert("You have not signed up");
                }
            });
        } catch (e) {
            console.log(e);
        }
    }

    return(
      <header style={backgroundStyles}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
  <form style={{ width: '330px',height:"370px", margin: '20px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',background:"#F5F5F5" }} onSubmit={checkData}>
    <div className="mb-3">
      <label htmlFor="username" className="form-label">
        Username
      </label>
      <input
        type="text"
        className="form-control"
        id="username"
        placeholder="Enter Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="Enter Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
    </div>
    
    
    <div className="mb-3">
      <Link style={{color:"black"}} to="/signup">Don't have an account? Sign up here.</Link>
    </div>
    <button type="submit" className="btn btn-primary" style={{ borderColor: 'white',background: 'black' ,justifySelf:"center"}}>
      Login 8.22
    </button>
  </form>
</div>
</header>

    )
}