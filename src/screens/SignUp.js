import { useMutation, gql } from "@apollo/client";
import {
  faFacebookSquare,
  faGooglePlusSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import FormError from "../components/auth/FormError";
import Input from "../components/auth/Input";
import Separator from "../components/auth/Separator";
import SocialLogin from "../components/auth/SocialLogin";
import PageTitle from "../components/PageTitle";
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

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

function SignUp() {
  const history = useHistory();
  const onCompleted = (data) => {
    const { username, password } = getValues();
    const {
      createAccount: { ok },
    } = data;
    if (!ok) {
      return;
    }
    history.push(routes.home, {
      message: "Account created. Please log in",
      username,
      password,
    });
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const { register, handleSubmit, errors, formState, getValues } = useForm({
    mode: "onChange",
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: {
        ...data,
      },
    });
  };
  return (
    <AuthLayout>
      <PageTitle title="Signup" />
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
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            ref={register({
              required: "First Name is required",
            })}
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <FormError message={errors?.firstName?.message} />

          <Input
            ref={register}
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
          <FormError message={errors?.lastName?.message} />

          <Input
            ref={register({
              required: "Email is required",
            })}
            name="email"
            type="text"
            placeholder="Email"
          />
          <FormError message={errors?.email?.message} />

          <Input
            ref={register({
              required: "Username is required",
            })}
            name="username"
            type="text"
            placeholder="Username"
          />
          <FormError message={errors?.username?.message} />

          <Input
            ref={register({
              required: "Password is required",
            })}
            name="password"
            type="password"
            placeholder="Password"
          />
          <FormError message={errors?.password?.message} />

          <Button
            type="submit"
            value={loading ? "Loading..." : "Sign up"}
            disabled={!formState.isValid || loading}
          />
        </form>
      </FormBox>
      <BottomBox cta="Hava an account?" linkText="Log in" link={routes.home} />
    </AuthLayout>
  );
}

export default SignUp;
