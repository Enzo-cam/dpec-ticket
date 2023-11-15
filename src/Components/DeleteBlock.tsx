import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const DeleteBlock = () => {
    return (
        <FontAwesomeIcon 
            icon={faX}
            className='text-red-500 hover:cursor-pointer hover:text-red-700 text-base'
        />
    )
}

export default DeleteBlock