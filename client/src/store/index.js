import { configureStore } from '@reduxjs/toolkit'
import usersReducer, { rollbackUser } from './users/slice'
import authReducer from './auth/slice'
import { toast } from 'sonner'

const syncWitchDatabaseMiddleware = store => next => action => {
  const { type, payload } = action
  const previousState = store.getState()

  next(action)

  if (type === 'users/deleteUserById') {
    const userIdToRemove = payload
    const userToRemove = previousState.users.find(
      user => user.id === userIdToRemove
    )

    fetch(`http://localhost:3000/users/${userIdToRemove}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) return toast.success('User deleted')
        throw new Error('Error: Usuario no encontrado')
      })
      .catch(error => {
        toast.error('Error deleting')
        if (userToRemove) store.dispatch(rollbackUser(userToRemove))
        console.error(error)
      })
  }
}

export const store = configureStore({
  reducer: { users: usersReducer, auth: authReducer },
  middleware: () => {
    return [syncWitchDatabaseMiddleware]
  }
})
