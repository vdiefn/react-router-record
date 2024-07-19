import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
import List from '../components/List'
import axios from "axios"


function AlbumSearch() {
  const [search, setSearch] = useState('')
  const [list, setList ] = useState([])
  const [searchParams, setSearchParams ] = useSearchParams()
  const api = 'https://api.unsplash.com/search/photos'
  const accessId = import.meta.env.VITE_UNSPLASH_ACCESS

  useEffect(() => {
    if(search !== ''){
      (async () => {
        const response = await axios.get(`${api}?client_id=${accessId}&query=${search}`)
        const { results } = response.data
        setList(results)
      })()
    }
  }, [search])

  useEffect(() => {
    setSearch(searchParams.get('query'))
  }, [searchParams])

  return( <>
      搜尋頁面 {search}
      <input type='text' className="form-control" defaultValue={search} 
        onKeyUp={(e) => {
          if( e.code === 'Enter') {
            setSearchParams({query: e.target.value})
          }
        }}>
      </input>
      <List list={list} />

    </>
  )
}

export default AlbumSearch