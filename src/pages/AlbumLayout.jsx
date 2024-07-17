import { Outlet, Link } from "react-router-dom"
import {useState, useEffect} from 'react'
import axios from 'axios'


function AlbumLayout(){
  const [list, setList] = useState([])
  const api = 'https://api.unsplash.com/search/photos/'
  const accessId = import.meta.env.VITE_UNSPLASH_ACCESS

  useEffect(() => {
    (async() => {
      const response = await axios.get(`${api}?client_id=${accessId}&query=animal`)
      const { results }= response.data
      setList( results )
    })()
  }, [])
  return (
    <div className="row">
      <div className="col-4">
        左側列表
        {
          list.map((item) => {
            return (<li key={item.id}> {item.id}
                <Link to={item.id}>{item.id}</Link>
              </li>
            )
          })
        }
      </div>
      <div className="col-8">
        <Outlet context={ list }/>
      </div>
    </div>
  )
}

export default AlbumLayout