//form takes username and Age ,after succesfull add in list
//if -ve age  ,indicate -ve
//if no entry (all 3 cases) ,pls enter message
//Invalid button should be removed on clicking ok or anywhere outside (invalid entry)
import React,{useState} from "react";
import Card from "../UI/Card";
import "./AddUser.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser=(props)=>{

const[enteredUsername,setEnteredUsername]=useState("");
const[enteredAge,setEnteredAge]=useState("");
const[error,setError]=useState();
const addUserHandler =(event)=>{
    event.preventDefault();
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0 ){
        setError({
            title:"Invalid Input",
            message:"Pls enter a valid username and age (non-empty values)."})
        
        return;
    }
    if (+enteredAge < 1){

        setError({
            title:"Invalid Input",
            message:"Pls enter a valid age (> 0)."})

        return;
    }

    props.onAddUser(enteredUsername,enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
}
const usernameChangeHandler=(event)=>{
    setEnteredUsername(event.target.value); 
}
const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value); 
}
const errorHandler=()=>{
    setError(null);
}
return (
<div>

{error && (<ErrorModal title = {error.title} message={error.message} onConfirm={errorHandler}/>) }

<Card className="input">
<form onSubmit={addUserHandler}> 
 <label htmlFor="username">Username</label> 
 <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler}/> 
 <label htmlFor="age">Age</label>
 <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}/>  
 <Button type="submit">Add User</Button>
</form>
</Card>
</div>
)
}
export default AddUser;