import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


function NotFound() {
  const navigate = useNavigate()

  useEffect(()=>{
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }, [navigate])
  return(<>
    這是不存在的頁面
  </>)
}

export default NotFound