import { message } from 'antd'
import { useEffect } from 'react'
import { useRoutes, useLocation, useNavigate } from 'react-router-dom'
import routes from './router'

const ToLogin = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/login')
    message.warning('Please login first')
  }, [])

  return <div></div>
}

const ToPage1 = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/')
  }, [])

  return <div></div>
}

const BeforeRouterEnter = () => {
  const router = useRoutes(routes)
  const location = useLocation()

  // if the user is not logged in, redirect to login page
  const token = localStorage.getItem('react_management_token')
  if (!token && location.pathname !== '/login') {
    return <ToLogin />
  }

  // if the user is logged in, redirect to home page
  if (token && location.pathname === '/login') {
    return <ToPage1 />
  }

  return router
}

const App = () => {


  return (
    <div>
      <BeforeRouterEnter />
    </div>
  )
}

export default App
