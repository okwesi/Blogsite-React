import { Image } from "antd";
import { Button } from 'antd';
import { Navigate, useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();

  return (
    <>
      <Image
        src="https://img.freepik.com/free-vector/welcome-concept-illustration_114360-5022.jpg?w=2000"
      />
    <Button type="primary" size="large" onClick={() => {navigate("/signin")}}>
    Log In 
  </Button>
  </>
  );
}

export default Welcome;
