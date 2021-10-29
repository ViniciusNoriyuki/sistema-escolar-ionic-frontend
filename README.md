# Sistema-Escolar-FrontEnd

Front-End desenvolvido em Ionic (versão 3), com utilização de JS, TS e Angular.

Para o funcionamento do sistema é necessário relizar o clone deste repositório e seu backend (https://github.com/ViniciusNoriyuki/Sistema-Escolar).
Também é necessário a instalação das seguintes ferramentas:
- Instalar o NodeJS (https://nodejs.org)
  - Testar o NodeJS:
    - node -v
    - npm -v
- Ionic CLI V3. Para instalar o Ionic e Cordova (https://ionicframework.com/docs/intro/installation), favor executar o seguinte comando para instalar a versão compatível:
  - npm install -g ionic@3.19.0 cordova@7.1.0
- Testar a instalação do Ionic e Cordova:
  - ionic -v
  - cordova -v
  
NOTA: Ao realizar o clone do Front-End as dependências podem não vir automaticamente (pasta ./node_modules). Basta utilzar o comando "npm install".

Para iniciar a aplicação, basta inicializar o back-end e em seguida o front-end com o comando "ionic serve".
Ao iniciar, para visualizar como tela de celular, clicar com botão direito e selecionar "inspecionar".

Funcionalidades:
- Tela de login para aluno e professor
- Menu específico para aluno e professor
- Tratamento de erros personalizados
- Aluno:
  - Visualiza apenas suas própias notas e disciplinas atuais
  - Página de perfil com seu nome e email
  - Botão sair
- Professor:
  - Tela principal com sua disciplina atual e seu alunos
  - Tela para cadastro de novo aluno, professor e disciplina
  - Tela para atribuir disciplina a um aluno
  - Tela para adicionar disciplina em um professor
  - Tela para lançamento de notas a um aluno e apenas em disciplinas em que está atualmente
  - Página de perfil com seu nome e mail
  - Botão sair
  
