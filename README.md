## API-REST

 * Criando uma aplicação para cadastro de paciente e vacina.

 * Usando Docker-compose e Postgres para salvar os dados através do Typeorm


# Rodar a aplicação

  ### Comandos:
  
 * Primeiro: yarn install
 * Segundo: docker-compose up -d
 * Terceiro: yarn typeorm-run

  Para rodar a aplicação é preciso ter o docker instalado na máquina assim como o node.

# Testar as rotas

URL: http://localhost:3333

  Vacinado:
    
  * POST /api/vacinado = Cadastrar paciente 
  * GET /api/vacinado  = Listar paciente
  * PUT /api/vacinado/:id  = Editar paciente
  * DELETE /api/vacinado/:id  = Deletar paciente


  Vacina:
    
  * POST /api/vacina = Cadastrar vacina
  * GET /api/vacina = Cadastrar vacina
  * POST /api/vacina/:id = Listar vacina por usuário
