const Register = () => {
    return (
        <>
        <h1>Register</h1>
        <form>
    <label>
    Name:
    <input type="text" name="name" />
    </label>
    <br></br>
    <label>
        Email:
        <input type="email" name="email"/>
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
  
  export default Register;