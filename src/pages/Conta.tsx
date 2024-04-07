import { useContext, useEffect,useState } from "react";
import { api } from "../api";
import {Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import CardInfo from "../components/CardInfo/CardInfo";
import { useParams,useNavigate, Link } from 'react-router-dom';
import { AppContext } from "../components/AppContext/AppContext";
 

interface UserData {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string
  }
const Conta = () => {
    const [userData, setUserData] = useState<null |UserData >()
    
    const {isLoggedIn} = useContext(AppContext);

    const {id} = useParams();
    const navigate = useNavigate();

    !isLoggedIn && navigate('/');

    useEffect(() => {
      const getData = async () => {
        const data: any | UserData = await api
        setUserData(data);
      };
      getData();
    },[]);
  const actualData = new Date()


  if(userData && id !== userData.id) {
     navigate('/c');
  }
  
    return (
        <Center>
        <SimpleGrid columns={2} spacing={8} paddingTop={16}>
            {
            userData === undefined || userData === null ?
            (
            <Center>
                <Spinner size='xl' color="white"/> 
            </Center>
                ) :
            (<>
                <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`${actualData.getDay()} / ${actualData.getMonth()}/ ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}/>
                <CardInfo mainContent={`Saldo`} content={`R$ ${userData.balance}`}/>
            </>)
            }
            
            <Text fontSize='2xl' color="white">
                <Link to='/infoconta/1'>Informações da conta</Link>
            </Text>
        </SimpleGrid>
        </Center>
    )
}
export default Conta;