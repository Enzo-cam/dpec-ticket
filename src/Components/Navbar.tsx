import Link from "next/link"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTicket, faHome } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return(
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href={'/'}>
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href={'/ticketpage/new'}>
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-text">Probando P</p>
      </div>
    </nav> 
  )
  
}

export default Navbar