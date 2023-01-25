import "../styles/login.scss";
import lendsqrLogo from "../assets/lendsqr.svg";
import signInImage from "../assets/sign_in.svg";
import Form from "../components/Form";
import LoginForm from "./../ui/LoginForm";

const Login = () => {
  return (
    <main className="container">
      <header className="container_header">
        <a href="/">
          <img src={lendsqrLogo} alt="Leadsqr logo" />
        </a>
      </header>
      <div className="grid">
        <section className="section_image">
          <img src={signInImage} alt="Sign in image" className="header_img" />
        </section>
        <section className="section_form">
          <LoginForm />
        </section>
      </div>
    </main>
  );
};

export default Login;
