import express from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors());

app.listen(3333);




//Rota: endereço completo da requisição
//Recurso: qual entidade estamos acessando do sistema

//GET: buscar uma ou mais informações do backend
//POST: criar uma nova informação no backend
//PUT: atualizar uma informação existente no backend
//DELETE:remover uma informação do backend

//POST http://localhost:3333/users = criar um usuário
//GET http://localhost:3333/users = listar usuários
//GET http://localhost:3333/users/5 = buscar dados do usuário com id 5 

//Request Param: parâmetros que vem na própria rota que identificam um recursos 
//Query Param: parametros que vem na própria rota geralmente opcionais para filtros, paginação
//Request Body: parametros para criação/atualização de informações

//Banco de Dados (Knex.js):
//SELECT * FROM users WHERE name = 'David'
//knex('users').where('name', 'David').select('*')