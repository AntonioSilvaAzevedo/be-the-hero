const express = require('express');
const cors = require('cors'); // importa o express
const routes = require('./routes'); //Importa o arquivo de rotas

const app = express();

app.use(cors());
app.use(express.json())//informa que o formato de requisição sera em JSON
app.use(routes)

/**
 * ROTA / RECURSO
 * 
 */
/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no bacck-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
  * Route Params: Parâmetros utilizados para  identificar recursos
  * Request Body: Corpo da requsição, utilizado para criar ou alterar recursos
  * 
  * 
  * 
  */


app.listen(3333);