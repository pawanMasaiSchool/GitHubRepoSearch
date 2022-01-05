import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginSuccess } from "../redux/authRedux/action";

function LoginPage() {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuth);

  const handleLogin = () => {
    const myAction = loginSuccess("yes");
    dispatch(myAction);
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <Box>
      <br />
      <br />
      <Button onClick={handleLogin} variant="contained">
        Login
      </Button>
    </Box>
  );
}

export default LoginPage;
