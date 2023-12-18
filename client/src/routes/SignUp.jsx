import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'

export function SignUp() {
  const [name, setName] = useState('')
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const { auth } = useAuth()

  if (auth.isAuthenticated) return <Navigate to='/' />

  const nameChange = e => {
    const newName = e.target.value

    if (newName.startsWith(' ')) return

    setName(newName)
  }

  const userChange = e => {
    const newUser = e.target.value

    if (newUser.startsWith(' ')) return

    setUser(newUser)
  }

  const emailChange = e => {
    const newEmail = e.target.value

    if (newEmail.startsWith(' ')) return

    setEmail(newEmail)
  }

  const passChange = e => {
    const newPass = e.target.value

    if (newPass.startsWith(' ')) return

    setPass(newPass)
  }

  return (
    <>
      <section className='login-section'>
        <h1>Sign Up</h1>
        <form className='form'>
          <div className='input-group'>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={nameChange}
              placeholder=''
              autoComplete='off'
              autoFocus
            />
            <label htmlFor='name'>Full Name</label>
          </div>
          <div className='input-group'>
            <input
              type='text'
              id='user'
              name='user'
              value={user}
              onChange={userChange}
              placeholder=''
              autoComplete='off'
            />
            <label htmlFor='user'>Username</label>
          </div>
          <div className='input-group'>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={emailChange}
              placeholder=''
              autoComplete='off'
            />
            <label htmlFor='email'>Email</label>
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
          <button>Sign Up</button>
        </form>
      </section>
    </>
  )
}
