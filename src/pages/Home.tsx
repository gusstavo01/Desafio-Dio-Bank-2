import { Card } from "../components/Card/Card";
import { Box, Center, Input} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { login } from "../services/login";
import { useContext, useState, useEffect } from "react";
import  MyButton  from '../components/MyButton/Button';
import { AppContext } from "../components/AppContext/AppContext";
import { changeLocalStorage, getAllLocalStorage } from "../services/storage";
 const Home = () => {
      
      const [email, setEmail] = useState<string>('');
      const [senha, setSenha] = useState<string>('');
      const {setIsLoggedIn} = useContext(AppContext);
      const navigate = useNavigate();
      const validateUser = async (email:string) => {
            const loggedIn = await login(email, senha);
            if(!loggedIn) {
                return  alert('Email inválido');
            }
            setIsLoggedIn(true);
            changeLocalStorage({
                  login: true,
                  email: email,
                  password: senha
            });
            navigate('/conta/1')
      }
      useEffect(() => {
            const storageData = getAllLocalStorage();
            if(storageData) {
              const { login } = JSON.parse(storageData);
              if(login) {
                navigate('/conta/1');
              }
            }
          }, [navigate])
    
    return(
        
            <Box>  
                  <Card>
                  <Box bg='white' borderRadius='25px' padding='15px'> 
              <Center>
                <h3>Faça o login</h3>
               
             
                </Center>
             
              <Input placeholder="Email" value={email} type='email' onChange={(event) => setEmail(event.target.value)}/>
              <Input placeholder="Password" value={senha} onChange={(event) => setSenha(event.target.value)}/>
              <Center><MyButton onClick={() => validateUser(email)} children={'Enviar'}/></Center>
              
            </Box>
                  </Card>
            </Box>
      
        
    )
}

export default Home;