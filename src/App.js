import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
// layouts
import HelpLayout from './layouts/HelpLayout'
import RootLayout from './layouts/RootLayout'
import CareersLayout from './layouts/CareersLayout'
// pages
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/help/Contact'
import Faq from './pages/help/Faq'
import NotFound from './pages/NotFound'
import Careers, { careersLoader } from './pages/careers/Careers'
import CareerDetails, {
  careerDetailsLoader,
} from './pages/careers/CareerDetails'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        ></Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
