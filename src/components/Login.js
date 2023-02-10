const Login = () => {
    return(
    <>
    <h1>Login</h1>
    <form>
    <label>
    Username:
    <input type="text" name="uname" />
    </label>
    <br></br>
    <label>
        Password:
        <input type="password" name="password"/>
    </label>
    <br></br>
    <input type="submit" value="Submit" />
    </form>
    
    </>
    )
    
  };
  
  export default Login;