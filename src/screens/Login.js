import {
  faFacebookSquare,
  faGooglePlusSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Separator from "../components/auth/Separator";
import SocialLogin from "../components/auth/SocialLogin";
import PageTitle from "../components/PageTitle";
import routes from "../routes";

const FacebookLogin = styled(SocialLogin)`
  background-color: #385285;
`;

const GoogleLogin = styled(SocialLogin)`
  background-color: #d7461f;
`;

function Login() {
  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Log in" />
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
