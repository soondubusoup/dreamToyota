import { Outlet} from 'react-router-dom'

const Navigation = () => {
    return(
      <div>
        <div>
          <h1>I am the naviagation bar</h1>
        </div>
        <Outlet />
      </div>
    )
  }
export default Navigation  