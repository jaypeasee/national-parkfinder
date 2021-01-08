import { CurrentParkContainer } from '../interfaces'
import parsePhoneNumber from 'libphonenumber-js'
import './Contact.scss'

const Contact: React.FC<CurrentParkContainer> = props => {
  console.log(props)
  const { currentPark } = props as CurrentParkContainer 
  const { contacts, emailAddresses} = currentPark as any 
  const { addresses } = currentPark as any

  const parsedPhoneNumber: any = parsePhoneNumber(`+1${currentPark.contacts.phoneNumbers[0].phoneNumber}`)
  console.log(parsePhoneNumber)

    return (
      <section>
        <p><b>Email: </b>{currentPark.contacts.emailAddresses[0].emailAddress}</p>
        <p><b>PhoneNumber: </b>{parsedPhoneNumber.format("NATIONAL")}</p>
        <p><b>Mailing Address: </b>{addresses[0].city}</p>
      </section>
    )
}

export default Contact
