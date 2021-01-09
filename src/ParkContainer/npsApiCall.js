export const parkRequest = async (parkCode) => {
    const response = await fetch(
      `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=XyojdzbIDGJAJNc2rrG7ez4alMdr4ghhxUve5IOF`
    )
    const data = await response.json()
    return data
  }