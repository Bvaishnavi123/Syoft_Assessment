
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,

  Input,
  InputRightElement,
  Button,
  InputGroup,
} from "@chakra-ui/react";

export const Register = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone:null,
    role: "",
    password: "",
  });

  const handleClick = () => setShow(!show);
  const handleChange = (e) => {
    //console.log(e.target.name)
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  
  const register = (e) => {
    e.preventDefault();
    const { name, email, password,phone ,role} = user;
    
    console.log(role)
      axios
        .post("http://localhost:5000/register", user)
        .then((res)=>{
          console.log(res)
          navigate("/login")
        })
        .catch((err)=>{
          alert("Error: " + err)
        })
        
    
  };
  return (
    <div id="main-container">
        <Box
      boxShadow="xs"
      p="6"
      rounded="md"
      bg="white"
      width="40%"
      height={600}
      align="center"
      
    >
      <h1>Register</h1>
      <FormControl isRequired>
        <FormLabel htmlFor="first-name">First name</FormLabel>
        <Input
          id="first-name"
          type="text"
          name="name"
          onChange={handleChange}
        />
        <br />
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" name="email" onChange={handleChange} />

        <br />
        <FormLabel htmlFor="tel">Phone No.</FormLabel>
        <Input type='tel' placeholder='phone number' name="phone"/>
        <br />
        <FormLabel htmlFor="role">Role</FormLabel>
        <Input type='text' placeholder='Role' name ="role"onChange={handleChange}  />
        <br />
        <FormLabel htmlFor="password">Password</FormLabel>

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            name="password"
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
       <br />
        
       
        
        <Button colorScheme="gray" width="100%" onClick={register}>
          Register
        </Button>
        <br />
        <p>Or </p>
        <Button
          colorScheme="gray"
          width="100%"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </FormControl>
    </Box>
    </div>
    
  );
};