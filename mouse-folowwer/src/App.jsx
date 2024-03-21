import { useEffect, useState} from "react"

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition]= useState({ x:0, y: 0 }) 

  useEffect(() => {
    const handleMove= (event) => {
      const {clientX, clientY} = event
      console.log({clientX,clientY})
      setPosition ({x: clientX, y: clientY})
    }
    if (enabled){
    window.addEventListener('pointermove', handleMove)
    } 
//Con el return nos desuscribimos al evento para limpiar y que no se siga ejecutando
//Esto se ejecuta al cerra la app o cuando cambia la dependencia
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <main>
    <div style={{
      position:'absolute',
      backgroundColor:'white',
      borderRadius:'50%',
      opacity: 0.8,
      pointerEvents:'none',
      left: -20,
      top: -20,
      width:40,
      height:40,
      transform: `translate(${position.x}px, ${position.y}px )`
    }} 
    />
    <button onClick={() => setEnabled(!enabled)}>
      {enabled ? 'Desactivar ' : 'Activar '} 
            seguir puntero
    </button>
    </main>
  )
  
}

export default App
