import { Router } from 'express'
import { Controller } from '../controllers/controller.js'

export const createRouter = () => {
  const router = Router()

  router.get('/1', Controller.prueba1)
  router.get('/2', Controller.prueba2)
  router.delete('/:id', Controller.deleteUserById)

  return router
}
