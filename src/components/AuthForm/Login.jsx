import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import { Alert, AlertIcon } from "@chakra-ui/react";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { loading, error, login } = useLogin();
  return (
    <>
      <Input
        placeholder='Email'
        fontSize={14}
        size={"sm"}
        type='email'
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder='password'
        fontSize={14}
        size={"sm"}
        type='password'
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      {error && (
        <Alert status='error' fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12}></AlertIcon>
          {error.message}
        </Alert>
      )}
      <Button
        w={"full"}
        colorScheme='blue'
        size={"sm"}
        isLoading={loading}
        onClick={() => login(inputs)}
      >
        Log In
      </Button>
    </>
  );
};
export default Login;
