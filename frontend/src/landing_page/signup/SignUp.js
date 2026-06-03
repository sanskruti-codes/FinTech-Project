import axios from "axios";
import { useState } from "react";

function Signup() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {

    try {

      const res = await axios.post(
        "http://localhost:3002/signup",
        {
          username,
          email,
          password,
        }
      );

      alert(res.data.message);

    } catch (error) {

      alert(error.response.data.message);

    }

  };

  return (

    <div>

      <h1>Signup</h1>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <br /><br />

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

      <button onClick={handleSignup}>
        Signup
      </button>

    </div>

  );
}

export default Signup;