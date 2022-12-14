import { useContext } from 'react'
import { AuthContext } from '../context/auth'

const Home = () => {
  const [auth, setAuth] = useContext(AuthContext)
  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </div>
  )
}

export default Home
