import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Posts from './pages/Posts'
import PagesIndex from './pages/PagesIndex'
import PageDetail from './pages/PageDetail'
import Links from './pages/Links'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="pages" element={<PagesIndex />} />
          <Route path="pages/:slug" element={<PageDetail />} />
          <Route path="links" element={<Links />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
