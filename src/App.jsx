import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout.jsx'
import About from './pages/About.jsx'
import BuildDeck from './pages/BuildDeck.jsx'
import CustomWork from './pages/CustomWork.jsx'
import CustomWorkDetails from './pages/CustomWorkDetails.jsx'
import DeckDetails from './pages/DeckDetails.jsx'
import Editions from './pages/Editions.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="editions" element={<Editions />} />
          <Route path="decks/:deckSlug" element={<DeckDetails />} />
          <Route path="custom-work" element={<CustomWork />} />
          <Route path="custom-work/:projectSlug" element={<CustomWorkDetails />} />
          <Route path="build-deck" element={<BuildDeck />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
