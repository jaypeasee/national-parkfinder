export interface ParkCode {
  parkCode: string
}

export interface Name {
  fullName: string
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

export interface Images {
  credit: string
  title: string
  altText: string
  caption: string
  url: string
}

export interface CurrentParkContainer {
  currentPark: CurrentPark
}

export interface CurrentPark {
  // currentPark: CurrentPark
  name: string
  fullName: string
  description: string
  directions: string
  latitude: string
  longitude: string
  activities: Activities
  contacts: Contacts
  directionsInfo: string
  directionsUrl: string
  weatherInfo: string
  image: Images
  id: string
  url: string
}