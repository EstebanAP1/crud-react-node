import { useDispatch, useSelector } from 'react-redux'
import { addNewUser, deleteUserById } from '../store/users/slice'

export const useUsers = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  const addUser = user => {
    dispatch(addNewUser({ user }))
  }

  const deleteUser = id => {
    dispatch(deleteUserById(id))
  }

  return { users, addUser, deleteUser }
}
