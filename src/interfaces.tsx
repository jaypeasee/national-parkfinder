import { RouteComponentProps } from 'react-router-dom'

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

export interface CurrentParkContainer {
  currentPark: CurrentPark
}

export interface RouteProps {
    // location?: H.Location;
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    render?: (props: RouteComponentProps) => JSX.Element
    // children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
    path?: string | string[];
    exact?: boolean;
    sensitive?: boolean;
    strict?: boolean;
}