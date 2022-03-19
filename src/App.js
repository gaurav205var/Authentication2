import logo from "./logo.svg";
import "./App.css";
import {useState} from "react"
import { useHistory } from "react-router-dom";

function App() {
  // let history = useHistory();
  const [userName,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(null)
  const submit=(e)=>{
    e.preventDefault()
    console.log(userName,password,error)
    if(userName==="admin"&& password==="iamvaccinated")
    {
    //  history.push("/post")
    }
    else{
      setError("Your email and password does not match")

    }
  }
  return (
    <div
      className="d-inline-flex justify-content-center align-items-center w-100 bg-light"
      style={{ height: "100vh" }}
    >
      <form onSubmit={(e)=>submit(e)}>
        {error&&
         <div className="text-center text-danger">
               {error}
         </div>
        }
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            onChange={(e)=>setUserName(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        
  
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
