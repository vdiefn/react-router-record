import { useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

function AlbumPhoto() {
  const { id } = useParams()
  const [photo, setPhoto] = useState({})
  const api = 'https://api.unsplash.com/photos'
  const accessId = import.meta.env.VITE_UNSPLASH_ACCESS
  const navigate = useNavigate()

  useEffect(() => {
    (async() => {
      const response = await axios.get(`${api}/${id}?client_id=${accessId}`)
      setPhoto(response.data)
    })()
  }, [id])

  return (
    <>
    <button type='button' onClick={()=>{navigate(-1)}}>回上一頁</button>
      這是一張圖片 {id}
      <p>{photo.description}</p>
      <img src={photo?.urls?.regular} className="img-fluid" alt=""></img>
    </>
  )
}

export default AlbumPhoto