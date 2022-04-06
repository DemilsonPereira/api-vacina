## API-REST

 * Criando uma aplicação para cadastro de paciente e vacina.

 * Usando Docker-compose e Postgres para salvar os dados através do Typeorm


# Rodar a aplicação

  ### Comandos:
  
 * Primeiro: yarn install
 * Segundo: docker-compose up -d
 * Terceiro: yarn typeorm-run

  
</br>
</br>

## Para rodar a aplicação é preciso ter o docker instalado na máquina, node e yarn.

Link para Download:

<div>
  <table>
    <tr>
      <td>
        <div>
          <a href="https://www.docker.com/products/docker-desktop/">
            <img src="https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png" alt="Postman" width="100" height="40">
          </a>
        </div>
      </td>
    <td>
      <div>
        <a href="https://nodejs.org/en/">
          <img src="https://logospng.org/download/node-js/logo-node-js-512.png" alt="Node.js" width="100" height="100">
        </a>
      </div>
    </td>
    <td>
      <div>
        <a href="https://yarnpkg.com/cli/install/">
        <img class="package-icon img-responsive" aria-hidden="true" alt="" src="https://api.nuget.org/v3-flatcontainer/yarnpkg.yarn/1.22.4/icon" width="100" height="50">
        </a>
      </div>
    </td>
  </tr>
</table>
<div>



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

</br>
</br>

### API Client para testar as rotas


<div>
  <table>
    <tr>
      <td>
        <div>
          <a href="https://www.postman.com/downloads/?utm_source=postman-home/">
            <img src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg" alt="Postman" width="32" height="32">
          </a>
        </div>
      </td>
    <td>
      <div>
        <a href="https://insomnia.rest/download/">
          <img class="w-10 mt-0 mb-0 mr-3 md:mr-6 md:w-14" src="https://cms-react-testing.cdn.prismic.io/cms-react-testing/fd794b96-f464-432b-b79a-bf99341b2143_insomnia-logo-bug.svg" alt="Open Source API Client" width="32" height="32">
        </a>
      </div>
    </td>
  </tr>
</table>
<div>