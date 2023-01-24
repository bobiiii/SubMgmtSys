function LoginWrong() {
    return (
      <div className="d-flex justify-content-center  text-danger pt-2">
        <p>Email or Password is incorrect.</p></div>
    )
  }
  export default LoginWrong

  export function LoginUserNotExist() {
    return (
      
        <div className="d-flex justify-content-center  text-danger pt-2">
        <p>Phone dosent exist. Kindly SignUp </p>
        
        </div>
    )
  }
  
