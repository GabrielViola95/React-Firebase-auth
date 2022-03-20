import { useAuth } from '../context/authContext'

const Home = () => {
  const {user} = useAuth();
  
  return (
    <div>
        <h1>Home</h1>
    </div>
  )
}

export default Home