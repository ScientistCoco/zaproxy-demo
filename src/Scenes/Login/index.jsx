import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { post } from '../../utilities';
import { Button, Header, TextInput } from "../../Components";
import './index.scss';

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [usernameInvalid, setInvalidUsername] = useState(false);
  const [passwordInvalid, setInvalidPassword] = useState(false);
  const [credentials, setCredentials] = useState(true);
  const history = useHistory();

  const onUsernameChange = (input) => 
  {  
    setUsername(input.target.value);    
  }

  const onPasswordChange = (input) => 
  {
    setPassword(input.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    setInvalidUsername(!username);
    setInvalidPassword(!password);

    if (!!username && !!password);
    validateUser(username, password);
  }

  const validateUser = async (username, password) => {
    const res = (await (await post('/login', { username, password })).json());

    if (res.status === "Success") {
      history.push("/account");
    }

    setCredentials(false);
  }

  return (
    <div className="Login">
      <Header />
      <div className="Login_Form"> 
        <form className="Login_Form_Content">
          <h2>Login</h2>
          {!credentials && <span className="Login_Form_Error"><b>Incorrect login information</b></span>}
          <br/>
          <br/>
          <TextInput label="Username" onChange={onUsernameChange}/>
          {usernameInvalid && <span className="Login_Form_Error">Username needed</span>}
          <br/>
          <br/>
          <TextInput label="Password" onChange={onPasswordChange} type="password"/>
          {passwordInvalid && <span className="Login_Form_Error">Password needed</span>}
          <br/>
          <br/>
          <Button onClick={onFormSubmit}>Submit</Button>    
        </form>
      </div>
    </div>
  );
}

export default Login;