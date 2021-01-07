export const parkRequest = async (parkCode) => {
    const response = await fetch(
      `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=C7eGnlc0BVmtjubOSmuD8P6UPmcRfLM4ewoeNBuI`
    )
    const data = await response.json()
    return data
  }