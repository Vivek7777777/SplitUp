import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './component/Navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeSettings } from './theme'
import { useMemo } from 'react'
import { CssBaseline } from '@mui/material'
import { useSelector } from 'react-redux'

function App() {

  const {mode} = useSelector(state => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<div>page not found</div>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
