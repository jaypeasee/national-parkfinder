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
    <section>
      <p><b>Address: </b></p>
      <p>{`${addresses[0].line1},`}</p>
      {addresses[0].line2 !== "" && <p>{`${addresses[0].line2},`}</p>}
      {addresses[0].line3 !== "" && <p>{`${addresses[0].line3},`}</p>}
      <p>{`${addresses[0].city},
      ${addresses[0].stateCode} 
      ${addresses[0].postalCode}`}</p>
      <p><b>Email Address: </b>{currentPark.contacts.emailAddresses[0].emailAddress}</p>
      <p><b>Phone Numbers: </b></p>
      {parkContactNumbers}
    </section>
  )
}

export default Contact
