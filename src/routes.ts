import { Router } from "express";
const router = Router();

router.get('/production', (req, res) => {
    return res.json({ msg: 'server running, Docker' })
});

import { CreateVacinadoController } from "./controllers/vacinado/CreateVacinadoController";
import { ListaVacinadoController } from "./controllers/vacinado/ListaVacinadoController";
import { UpdateVacinadoController } from "./controllers/vacinado/UpdateVacinadoController";
import { DeleteVacinadoController } from "./controllers/vacinado/DeleteVacinadoController";

import { CreateVacinaController } from "./controllers/vacina/CreateVacinaController";
import { ListaVacinaController } from "./controllers/vacina/ListaVacinaController";
import { ListaVacinaPorVacinadoController } from "./controllers/vacina/ListaVacinaPorVacinadoController";


const createVacinadoController = new CreateVacinadoController();
const listaVacinadoController = new ListaVacinadoController();
const updateVacinadoController = new UpdateVacinadoController();
const deleteVacinadoController = new DeleteVacinadoController();

const createVacinaController = new CreateVacinaController();
const listaVacinaController = new ListaVacinaController();
const listaVacinaPorVacinadoController = new ListaVacinaPorVacinadoController();



router.post('/api/vacinado', createVacinadoController.handle);
router.get('/api/vacinado', listaVacinadoController.handle);
router.put('/api/vacinado/:id', updateVacinadoController.handle);
router.delete('/api/vacinado/:id', deleteVacinadoController.handle);

router.post('/api/vacina', createVacinaController.handle);
router.get('/api/vacina', listaVacinaController.handle);
router.post('/api/vacina/:id', listaVacinaPorVacinadoController.handle);


export {
    router
}