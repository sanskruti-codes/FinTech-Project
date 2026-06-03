import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = async () => {

  try {

    const res = await axios.post(
      "http://localhost:3002/login",
      {
        email,
        password,
      }
    );

    console.log(res);

    localStorage.setItem(
      "token",
      res.data.token
    );

    console.log(
      localStorage.getItem("token")
    );

    alert("Login successful");

    window.location.href =
      "http://localhost:3001";

  } catch (error) {

    console.log(error);

    console.log(error.response);

    alert("Login failed");

  }

};

  return (

    <div>

      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>

  );
}

export default Login;