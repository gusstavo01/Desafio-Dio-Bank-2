import { Center, Flex, Spinner, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState} from "react";
import { api } from "../api";
import { AppContext } from "../components/AppContext/AppContext";
import { Link, useNavigate, useParams } from "react-router-dom";

interface UserData {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string
  }
const ContaInfo = () => {
    
    const [userData, setUserData] = useState<null | UserData>();
    const {isLoggedIn} = useContext(AppContext);

    const {id} = useParams();
    const navigate = useNavigate();

    !isLoggedIn && navigate('/');
    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api;
            setUserData(data);
        }
        getData();
    }, [])

    
 
    return(
        <Flex padding='20px' flexDirection="column"> {/* Adicione flexDirection="column" aqui */}
          
          
            <Text fontSize='3xl' fontWeight='bold' color='white'>
                Informações da conta                
            </Text>
            {userData === undefined || userData === null ?
            (
                <Center>
                    <Spinner size='xl' color="white"/> 
                </Center>
            ) :
            (<>
                <Text fontSize='xl' color='white'>
                    Nome: {userData?.name}
                </Text>
                <Text fontSize='xl' color='white'>
                   Email: {userData?.email}
                </Text>
                <Text fontSize='xl' color='white' marginTop='20px' fontWeight='bold'>
                   <Link to={`/conta/${id}`}>Voltar</Link>
                </Text>
                </>
    )

       
}
            
            
        </Flex>
    );
}

export default ContaInfo;