 import { useOutletContext } from "react-router-dom"
import List from '../components/List'
 
 function AlbumIndex(){
  const list = useOutletContext()

  return (
    <div>這是相簿首頁
      <List list={list} />
    </div>
  )
 }


 export default AlbumIndex