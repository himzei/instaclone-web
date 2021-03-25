import {
  faFacebookSquare,
  faGooglePlusSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Separator from "../components/auth/Separator";
import SocialLogin from "../components/auth/SocialLogin";
import routes from "../routes";

const FacebookLogin = styled(SocialLogin)`
  background-color: #385285;
`;

const GoogleLogin = styled(SocialLogin)`
  background-color: #d7461f;
`;

function Login() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const onUsernameChange = (event) => {
    setUsernameError("");
    setUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "") {
      setUsernameError("Not empty plz.");
    }
    if (username.length < 10) {
      setUsernameError("Too Short");
    }
  };
  return (
    <AuthLayout>
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form onSubmit={handleSubmit}>
          {usernameError}
          <Input
            onChange={onUsernameChange}
            value={username}
            type="text"
            placeholder="Username"
          />
          <Input type="password" placeholder="Password" />
          <Button
            type="submit"
            value="Log in"
            disabled={username === "" && username.length < 10}
          />
        </form>
        <Separator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in With Facebook</span>
        </FacebookLogin>
        <GoogleLogin>
          <FontAwesomeIcon icon={faGooglePlusSquare} />
          <span>Log in With Google</span>
        </GoogleLogin>
      </FormBox>
      <BottomBox
        cta="Don't hava an account?"
        linkText="Sign up"
        link={routes.signUp}
      />
    </AuthLayout>
  );
}

export default Login;
