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
    <div className='w-full max-w-xs m-auto text-black'>
      <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
        <h1 className='text-xl mb-4'>Home</h1>
        <p>Hola {user.displayName || user.email} ¿Qué quieres hacer hoy?</p>

        <button onClick={handleLogOut} className='bg-slate-200 hover:bg-slate-300 rounded py-2 px-4'>Desconectarse</button>

      </div>
    </div>
  )
}

export default Home