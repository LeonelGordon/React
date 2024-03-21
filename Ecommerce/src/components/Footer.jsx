import { useFilters } from '../hooks/useFilters.js'
import './Footer.css'

export function Footer () {
   // const {filters} = useFilters()

    return (
        <footer className='footer'>
            <h4>Prueba Tecnica de React</h4>
            <h5>Shooping Cart con useContext & useReducer</h5>
        </footer>
    )
}