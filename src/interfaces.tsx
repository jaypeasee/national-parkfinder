export interface LocalParkData {
  name: string 
  parkCode: string
  image: string
  state: string
  visited?: boolean
  bucketList?: boolean
}

export interface LocalParkContainer {
  visitedList: Array<any>
  bucketList: Array<any>
}

export interface Activity {
  id: string
  name: string
}

export interface Activities {
  activities: Array<Activity>
}

export interface Contacts {
  phoneNumber: string
  extension: string
  type: string
}

export interface ImageObject {
  credit: string
  title: string
  altText: string
  caption: string
  url: string
}

export interface Images {
  images: Array<ImageObject>
}

export interface EmailAddress {
  emailAddress: string
}

export interface PhoneNumber {
  phoneNumber: string
}

export interface Contacts {
  emailAddresses: Array<EmailAddress>
  phoneNumbers: Array<PhoneNumber>
}

export interface AddressDetails {
  city: string
  line1: string
  line2: string
  line3: string
  postalCode: string
  stateCode: string
}

export interface Addresses {
  addresses: Array<AddressDetails>
}

export interface CurrentPark {
  name: string
  fullName: string
  description: string
  directions: string
  latitude: string
  longitude: string
  activities: Activities
  contacts: Contacts
  addresses: Addresses
  directionsInfo: string
  directionsUrl: string
  weatherInfo: string
  states: string
  images: Images
  id: string
  url: string
  parkCode: string
}

export interface CurrentParkContainer {
  currentPark: CurrentPark
}

export interface AddRemoveFunctionality {
  addToVisited: (parkCode: string) => void
  deleteFromVisited: (parkCode: string) => void
  addToBucketList: (parkCode: string) => void
  deleteFromBucketList: (parkCode: string) => void
}