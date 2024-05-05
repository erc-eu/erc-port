

import './app.css'
import { Content } from './components/content/content'
import { Header } from './components/header/header'
import { LinksIcons } from './components/linksIcon/links-icon'


function App() {
  return (
    <div>
      <Header/>
      <LinksIcons/>
      <Content/>
    </div>
  )
}

export default App
