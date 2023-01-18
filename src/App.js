import {
  createBrowserRouter,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
// pages
import About from './pages/About'
import Home from './pages/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
