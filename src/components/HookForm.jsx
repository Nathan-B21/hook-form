import React, {useState} from 'react';


const HookForm = props =>{

    

    const[firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[cpassword, setcPassword] = useState("");




    return(
        <div>
            <form>
                <div class="form-group">
                    <label for="">FirstName:</label>
                    <input onChange = {e=> setFirstName(e.target.value)} type="text" class="form-control" id="firstName"></input>
                </div>
                <div class="form-group">
                    <label for="">Last Name:</label>
                    <input onChange = {e=> setLastName(e.target.value)} type="text" class="form-control" id="lastName"></input>
                </div>
                <div class="form-group">
                    <label for="">Email: </label>
                    <input onChange = {e=> setEmail(e.target.value)} type="email" class="form-control" id="email"></input>
                </div>
                <div class="form-group">
                    <label for="">Password: </label>
                    <input onChange = {e=> setPassword(e.target.value)} type="password" class="form-control" id="password"></input>
                </div>
                <div class="form-group">
                    <label for="">Confirm Password: </label>
                    <input onChange = {e=> setcPassword(e.target.value)} type="password" class="form-control" id="password"></input>
                </div>
                {/* <button type="submit" class="btn btn-primary">Submit</button> */}
            </form>


            <div>
                <p>FirstName: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confrim Password: {cpassword}</p>
            </div>
        </div>
    )
}
export default HookForm;