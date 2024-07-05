import { Avatar, Box } from "@mui/material";
import authStore from "../auth-store";
import { red } from "@mui/material/colors";

function Login() {
  const login = authStore((state) => state.login);
  const logout = authStore((state) => state.logout);
  const username = authStore((state) => state.username);

  const randomUserName = (): string => {
    const names = ["John Doe", "Jane Doe", "Foo Bar", "Baz Qux"];
    return names[Math.floor(Math.random() * names.length)];
  }

  return ( <Box bgcolor={red[50]} height={"100vh"}>
    <h1>Login</h1>
    <button onClick={() => login(randomUserName(), "https://picsum.photos/300/300")}>Login</button>  
    <button onClick={() => logout()}>Logout</button>
    <p>Username: {username ?? "Nothing here"}</p>
    <Avatar alt={username} src={authStore((state) => state.avatar)} />
  </Box> );
}

export default Login;