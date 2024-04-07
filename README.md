# Desafio dio Bank

Este projeto é um desafio proposto pela Digital Innovation One (DIO) durante a formação Fullstack em TypeScript. O projeto consiste em uma aplicação web para simular operações bancárias, como login, visualização de informações da conta e saldo.

# Funcionalidades
## Página de Login (Home)
- Os usuários podem fazer login inserindo seu email e senha.
- As informações de login são validadas. Se forem inválidas, o usuário é notificado.
- Após fazer login com sucesso, o usuário é redirecionado para a página de informações da conta.

## Página de Informações da Conta (Conta)
- Exibe informações da conta do usuário, como nome, saldo e data/hora atual.
- As informações são carregadas da API após o login do usuário.
- Se o usuário não estiver autenticado, será redirecionado para a página inicial.

# Componentes
## Card
- Componente visual para exibir informações em um formato de cartão.
## Botão Personalizado (MyButton)
- Componente para botão personalizado com estilo específico.
## Contexto de Aplicativo (AppContext)
- Contexto de aplicativo para gerenciar o estado global da autenticação do usuário.

# Dependências
- @chakra-ui/react: Biblioteca de componentes para interface do usuário.
- react-router-dom: Biblioteca de roteamento para aplicativos React.
- typescript: Linguagem de programação para JavaScript.
- Outras dependências padrão para aplicativos React e TypeScript.
- 
# Instalação
- Certifique-se de ter o Node.js e o npm instalados em seu sistema.
- Clone este repositório.
- No terminal, navegue até o diretório do projeto e execute npm install para instalar as dependências.
- Após a instalação das dependências, execute npm start para iniciar o servidor de desenvolvimento.
- Abra o navegador e acesse http://localhost:3000 para visualizar a aplicação.

  # Contato
  - Linkedin: https://www.linkedin.com/in/gustavo-aguiar-353538243/
