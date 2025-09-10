import { supabase } from "./supabaseClient"

function App() {
  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    if (error) console.error(error)
    else console.log(data)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Ni Connect 🚀</h1>
      <button 
        onClick={signInWithGoogle} 
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login with Google
      </button>
    </div>
  )
}

export default App
