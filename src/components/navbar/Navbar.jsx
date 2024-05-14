
import './navbar.css'

function Navbar() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav className = "nav-bar container">
          <img src ="/images/brand_logo.png" alt=" "/>
          <ul className='nav-list'> 
            <li className='nav-list-item'>MENU</li>
            <li className='nav-list-item'>LOCATION</li>
            <li className='nav-list-item'>ABOUT</li>
            <li className='nav-list-item'>CONTACT</li>
          </ul>

          <button className='navbtn' type="submit">Login</button>

        </nav>
        
      </div>
      
    </>
  )
}

export default Navbar