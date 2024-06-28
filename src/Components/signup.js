import React, { useState, useContext } from "react"
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext"; 


export default function Signup(){
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

    function sendData(e){
        e.preventDefault();
        const newUser = {
            username,
            password,
            
        }

        try{

            axios.post("http://localhost:8070/user/add", newUser)
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    setUser({ username }); 
                    navigate("/addproduct");
                    
                    
                }
            });
            

        }
        catch(e){
            console.log(e);

        }
        
    }

    return(
        <header style={backgroundStyles}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', 
        alignItems: 'center', minHeight: '80vh',backgroundImage: 'url("/home.jpg")',
        backgroundSize: 'cover',  backgroundPosition: 'center',backgroundRepeat: 'no-repeat' }}>
            <form style={{ width: '330px',height:"370px",margin: '15px 0',alignItems: 'center', 
  padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',background:"#F5F5F5" }}  onSubmit={sendData} >
                <div className="mb-3">
                    <label for="usename" className="form-label">Username</label>
                    <input type="text" className="form-control" id="usename" placeholder="Enter Username"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }} />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter Password"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                </div>
               
                
                <div className="mb-3">
                    <Link to="/login" style={{color:"black"}} >You already have an account?</Link>
                </div>
                <button style={{ borderColor: 'white',background: 'black' ,justifySelf:"center"}} type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
        </header>
    )
}