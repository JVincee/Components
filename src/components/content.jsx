import '../App.css'
import Leftbar from './leftbar'
import Rightbar from './rightbar'

function Content(){
  return(
    <div className="main">
      <Leftbar/>
      <p>This is the main content</p>
      <Rightbar/>
    </div>
  )
}

export default Content