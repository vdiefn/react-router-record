import { Outlet } from "react-router-dom"


function AlbumLayout(){
  return (
    <div className="row">
      <div className="col-4">
        左側
      </div>
      <div className="col-8">
        <Outlet />
      </div>
    </div>
  )
}

export default AlbumLayout