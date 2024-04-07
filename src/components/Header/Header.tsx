
import { Text, Center,Box, Flex, Spacer, Button} from '@chakra-ui/react';
 
import { useContext } from 'react';
import { AppContext } from '../AppContext/AppContext';
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../../services/storage';
export const Header = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AppContext);
    const navigate = useNavigate()
    const logout = () => {
        changeLocalStorage({login:false, email:'', password:''});
        setIsLoggedIn(false);
        navigate('/');
    }
    return (
        <Flex  backgroundColor='#1e88e5' color='white' padding='5px'>
        <Box>
            <Center>
                <Text fontSize='4xl'>GA Bank</Text>
            </Center>
        </Box>
        {
            isLoggedIn && (   <>
                <Spacer/>
                <Button onClick={() => logout()}>Sair</Button>
            </>
            )
        }
        </Flex>
    )
}