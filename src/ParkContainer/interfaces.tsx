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

export interface CurrentParkContainer {
  currentPark: CurrentPark
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
  directionsInfo: string
  directionsUrl: string
  weatherInfo: string
  images: Images
  id: string
  url: string
}