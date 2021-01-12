import { CurrentParkContainer } from '../interfaces'
import parsePhoneNumber from 'libphonenumber-js'
import './Contact.scss'

const Contact: React.FC<CurrentParkContainer> = props => {
  const { currentPark } = props as CurrentParkContainer
  const { addresses } = currentPark as any

  const parsedPhoneNumber = (phoneNumber: string) => {
    const addUS: any = parsePhoneNumber(`+1${phoneNumber}`)
    return addUS.format("NATIONAL")
  }

  const parkContactNumbers = currentPark.contacts.phoneNumbers.map(phone => {
    return <p>{parsedPhoneNumber(phone.phoneNumber)}</p>
  })

  return (
    <section className='contact-container'>
      <div>
        <h3>Address: </h3>
        <p>{`${addresses[0].line1},`}</p>
        {addresses[0].line2 !== "" && <p>{`${addresses[0].line2},`}</p>}
        {addresses[0].line3 !== "" && <p>{`${addresses[0].line3},`}</p>}
        <p>{`${addresses[0].city},
        ${addresses[0].stateCode} 
        ${addresses[0].postalCode}`}</p>
      </div>
      <div>
        <h3>Email Address: </h3>
        <p>
          {currentPark.contacts.emailAddresses[0].emailAddress}
        </p>
        <h3>Phone Number(s): </h3>
        {parkContactNumbers}
      </div>
    </section>
  )
}

export default Contact
