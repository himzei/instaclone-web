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
import { FatLink } from "../components/shared";
import routes from "../routes";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

const Subtitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

const FacebookLogin = styled(SocialLogin)`
  background-color: #385285;
`;

const GoogleLogin = styled(SocialLogin)`
  background-color: #d7461f;
`;

function SignUp() {
  return (
    <AuthLayout>
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <Subtitle>
            Sign up to see photos and videos from ypur friends
          </Subtitle>
        </HeaderContainer>
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in With Facebook</span>
        </FacebookLogin>
        <GoogleLogin>
          <FontAwesomeIcon icon={faGooglePlusSquare} />
          <span>Log in With Google</span>
        </GoogleLogin>
        <Separator />
        <form>
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Sign up" />
        </form>
      </FormBox>
      <BottomBox cta="Hava an account?" linkText="Log in" link={routes.home} />
    </AuthLayout>
  );
}

export default SignUp;
