import { useState } from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'

export function Login() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const { auth } = useAuth()

  if (auth.isAuthenticated) return <Navigate to='/' />

  const userChange = e => {
    const newUser = e.target.value

    if (newUser.startsWith(' ')) return

    setUser(newUser)
  }

  const passChange = e => {
    const newPass = e.target.value

    if (newPass.startsWith(' ')) return

    setPass(newPass)
  }

  const handleSubmit = e => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const user = Object.entries(formData)

    console.log(user)
  }

  return (
    <>
      <DefaultLayout />
      <section className='login-section'>
        <h1>Login</h1>
        <form className='form' onSubmit={handleSubmit}>
          <div className='input-group'>
            <input
              type='text'
              id='user'
              name='user'
              value={user}
              onChange={userChange}
              placeholder=''
              autoComplete='off'
              autoFocus
            />
            <label htmlFor='user'>Username</label>
          </div>
          <div className='input-group'>
            <input
              type='password'
              id='pass'
              name='pass'
              value={pass}
              onChange={passChange}
              placeholder=''
              autoComplete='off'
            />
            <label htmlFor='pass'>Password</label>
          </div>
          <button>Login</button>
        </form>
      </section>
    </>
  )
}
