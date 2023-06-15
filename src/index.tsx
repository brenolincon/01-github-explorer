import { App } from './App'
import { createRoot } from 'react-dom/client'
// Aula: Componentes com Typescript
const domNode = document.getElementById('root')!
const root = createRoot(domNode)

root.render(<App />)

// CÓDIGO DO VÍDEO AULA: typescript no react
// import { render } from 'react-dom'
// render(<App />, document.getElementById('root'))
