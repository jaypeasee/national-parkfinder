export interface LocalParkData {
  name: string
  parkCode: string
}

export interface ParkCode {
  parkCode: string
}

export interface Activities {
  id: string
  name: string
}

export interface Contacts {
  phoneNumber: string
  description: string
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
  images: Images
  id: string
  url: string
  parkCode: string
}

export interface CurrentParkContainer {
  currentPark: CurrentPark
}