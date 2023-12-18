import { useState } from 'react'
import { Toaster, toast } from 'sonner'
import { useUsers } from '../hooks/useUsers'

const fetchTest1 = async () => {
  const response = await fetch('http://localhost:3000/users/1')
    .then(res => {
      if (!res.ok) throw new Error('Error')
      return res.json()
    })
    .then(res => res.message)
    .catch(error => {
      toast.error('Error')
      console.error(error)
    })
  return response ?? 'Error fetching'
}

const fetchTest2 = async () => {
  const response = await fetch('http://localhost:3000/users/2')
    .then(res => {
      if (!res.ok) throw new Error('Error')
      return res.json()
    })
    .then(res => res.message)
    .catch(error => {
      toast.error('Error')
      console.error(error)
    })
  return response ?? 'Error fetching'
}

export function Dashboard () {
  const [state, setState] = useState('Not connected')
  const { deleteUser } = useUsers()

  const handleTest1 = async () => {
    const newState = await fetchTest1()
    setState(newState)
  }

  const handleTest2 = async () => {
    const newState = await fetchTest2()
    setState(newState)
  }

  const handleDelete = () => {
    deleteUser(1)
  }

  return (
    <>
      <main>
        <h1>{state}</h1>
        <div>
          <button onClick={handleTest1}>Test 1</button>
          <button onClick={handleTest2}>Test 2</button>
          <button onClick={handleDelete}>Delete user 1</button>
        </div>
        <Toaster richColors closeButton theme={'system'} />
      </main>
    </>
  )
}
