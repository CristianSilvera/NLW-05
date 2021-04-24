import { request, response, Router } from "express";
import { SettingsController } from "./controllers/SettingsController";


const routes = Router();
const settingsController = new SettingsController();

/**
 *Tipos de parametros
 * Routes params => Parametros de rotas
 * http://localhost:3333/settings/1
 * 
 * Query params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algunacoisa
 * 
 * Body params => {
 *  json
 * }
 * 
 */

routes.post("/settings", settingsController.create);

export { routes };

