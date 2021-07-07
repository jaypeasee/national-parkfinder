export const parkRequest = async (parkCode) => {
    const response = await fetch(
      `https://parkfinder-api.herokuapp.com/api/${parkCode}`
    )
    const data = await response.json()
    return data
  }