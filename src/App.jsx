import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Doacoes from './pages/doacoes/Doacoes'
import Contato from './pages/contato/Contato'
import Transmissao from './pages/Transmissao'
import QuemSomos from './pages/quemsomos/QuemSomos'
import DoutrinaEspirita from './pages/DoutrinaEspirita/DoutrinaEspirita'
import ObrasBasicas from './pages/DoutrinaEspirita/ObrasBasicas'
import ArtigosEspiritas from './pages/DoutrinaEspirita/ArtigosEspiritas'
import Oracoes from './pages/DoutrinaEspirita/Oracoes'
import Galeria from './pages/quemsomos/Galeria'
import NossosMomentos from './pages/quemsomos/NossosMomentos'
import NossosTrabalhos from './pages/quemsomos/NossosTrabalhos'
import Homenageados from './pages/quemsomos/Homenageados'
function App() {
 
  
  return (
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/quemsomos' element={<QuemSomos/>}/>
     <Route path='/galeria' element={<Galeria/>}/>
     <Route path='/nossosmomentos' element={<NossosMomentos/>}/>
     <Route path='/nossostrabalhos' element={<NossosTrabalhos/>}/>
     <Route path='/homenageados' element={<Homenageados/>}/>
     <Route path='/doutrinaespirita' element={<DoutrinaEspirita/>}/>
     <Route path='/obrasbasicas' element={<ObrasBasicas/>}/>
     <Route path='/artigosespiritas' element={<ArtigosEspiritas/>}/>
     <Route path='/oracoes' element={<Oracoes/>}/>
     <Route path='/transmissao' element={<Transmissao/>}/>
     <Route path='/doacoes' element={<Doacoes/>}/>
     <Route path='/contato' element={<Contato/>}/>
     <Route path='*' element={<h1>Not Found</h1>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
