import { createRoot } from 'react-dom/client'
import { App } from './App'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(<App />)

// CÓDIGO ALTERADO PARA REMOVER ERRO NO CONSOLE DO NAVEGADOR
// render(<App />, document.getElementById('root'))
