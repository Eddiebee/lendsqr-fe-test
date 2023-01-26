import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";

type LoginDetails = {
  email: string;
  password: string;
};

const LoginForm = () => {
  // make form controlled component and implement login functionality
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert("submitted");
    try {
      localStorage.setItem("loggedInUser", loginDetails.email);
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <header>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
      </header>

      <Form handleSubmit={handleSubmit}>
        <section className="input_section">
          <input
            title="email"
            type="email"
            name="email"
            placeholder="Email"
            value={loginDetails.email}
            onChange={(e) =>
              setLoginDetails((d) => {
                return { ...d, email: e.target.value };
              })
            }
            required
          />
          <div className="password_section">
            <input
              title="password"
              type="password"
              name="password"
              placeholder="Password"
              value={loginDetails.password}
              onChange={(e) =>
                setLoginDetails((d) => {
                  return { ...d, password: e.target.value };
                })
              }
              required
            />
            <span className="show_password">Show</span>
          </div>
        </section>
        <div className="forgot_password">
          <a href="#">Forgot Password?</a>
        </div>
        <Button text="LOG IN" />
      </Form>
    </>
  );
};

export default LoginForm;
