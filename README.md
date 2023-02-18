# Trybers & Dragons

# ![image](https://user-images.githubusercontent.com/98627465/219843951-fb36c3a5-a9ca-475a-a84c-1e9a147f073e.png) O foi desenvolvido
Este projeto foi desenvolvido aplicando os princípios da arquitetura SOLID e os princípios de POO(Programação Orienta a Objeto) em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG (Role Playing Game).

## Técnologias usadas

> Desenvolvido usando: TypeScript

## Instalando Dependências

> Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `trybers_and_dragons`.
  - A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybers_and_dragons bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências com `npm install`
  
  ⚠ Atenção ⚠ : **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.

## Executando aplicação

> Use o comando `docker exec -it trybers_and_dragons bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
> Dentro do terminal use um dos dois comandos para executar as classes da aplicação:
 ```
    npm start // executa o index.ts uma vez
 ```
    ou
 ```
    npm run dev // utiliza o nodemon pra vê as mudanças no index.ts em tempo real
 ```
