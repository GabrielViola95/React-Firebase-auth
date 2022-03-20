import { useAuth } from '../context/authContext'

const Home = () => {
  const {user, logout, loading} = useAuth();
  
  
  const handleLogOut = async () => {
    await logout();
    
  };

  if(loading) {
    return <h1>cargando...</h1>
  }

  return (
    <div>
        <h1>Home</h1>
        <p>Hola {user.email} ¿Qué quieres hacer hoy?</p>

        <button onClick={handleLogOut}>Desconectarse</button>
    </div>
  )
}

export default Home