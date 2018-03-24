# k121

## environment
node 8.9.4
npm 5

## frontend
Use npm install para instalar os pacotes necessario.
Usei uma versao do google que me ajudou a preparar o boilerplate para iniciar o desenvolvimento.
use npm run local para iniciar. Deixei o npm start para rodar no heroku, mas começou a falhar por causa de CORS. Vou tentar mais um pouco para ver se funciona.
Dentro da pasta tem um readme com mais informações sobre o projeto

## backend
Mesmo procedimento, Use npm install para instalar os pacotes necessario.
Usei um gerador de servidor express que é fornecido dentro do site do express.
para rodar eh necessario um mongodb local, eu tenho um dockerfile que inicia uma instancia local, mas não adicionei no projeto. No heroku está apontando para o mlab, mas como não consegui fazer funcionar, não finalizei a parte que utiliza o config automatico das variaveis.
Dentro da pasta tem um readme com mais informações sobre o projeto

Usei https://nodemailer.com/about/ para enviar e-mails;
para usar crie uma conta em https://ethereal.email/create;
Depois ao iniciar o programa passe a variavel com usuario e senha de email
-USER_EMAIL
&
MAIL_PASS

a variavel dbConfig esta disponivel tambem se o mongo esta em uma instancia do mlab

### Considerações finais
Me avise se ficar com qualquer duvida.