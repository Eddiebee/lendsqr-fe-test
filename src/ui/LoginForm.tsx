import React from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";

const LoginForm = () => {
  return (
    <>
      <header>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
      </header>

      <Form>
        <section className="input_section">
          <Input title="email" type="email" name="email" placeholder="Email" />
          <div className="password_section">
            <Input
              title="password"
              type="password"
              name="password"
              placeholder="Password"
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
