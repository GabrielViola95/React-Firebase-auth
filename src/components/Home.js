import { useAuth } from '../context/authContext'

const Home = () => {
  const {user, logout, loading} = useAuth();
  
  
  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error)
    }
    
  };

  if(loading) {
    return <h1>cargando...</h1>
  }

  return (
    <div>
        <h1>Home</h1>
        <p>Hola {user.displayName || user.email} ¿Qué quieres hacer hoy?</p>

        <button onClick={handleLogOut}>Desconectarse</button>
    </div>
  )
}

export default Home