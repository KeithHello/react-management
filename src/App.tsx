import { useState } from 'react'
import { Button } from 'antd'
import { UpCircleFilled } from '@ant-design/icons'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'

const App = () => {
  const router = useRoutes(routes)

  return (
    <div className="App">
      <Link to="/home">Home</Link> | 
      <Link to="/about">About</Link> |
      <Link to="/user">About</Link>
      {/* Top level of page
      <UpCircleFilled style={{fontSize: "40px"}} /> */}
      {router}

    </div>
  )
}

export default App
