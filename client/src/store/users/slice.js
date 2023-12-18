import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_STATE = [
  {
    id: 1,
    name: 'Esteban Padilla',
    age: 20,
    email: 'estebanap0926@gmail.com'
  }
]

export const initialState = (() => {
  return DEFAULT_STATE
})()

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      const id = crypto.randomUUID()
      const { user } = action.payload
      return [...state, { id, ...user }]
    },
    rollbackUser: (state, action) => {
      const { id } = action.payload
      const isUser = state.some(user => user.id === id)
      if (!isUser) {
        state.push(action.payload)
      }
    },
    deleteUserById: (state, action) => {
      const id = action.payload
      return state.filter(user => user.id !== id)
    }
  }
})

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions

export default usersSlice.reducer
