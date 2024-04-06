const numberOfLocations = (brands: any[]): any[] => {
  brands.forEach((brand) => {
    let keys = Object.keys(brand)
    let closeKey = keys.find((key) => {
      if (!isNaN(brand[key]) && brand[key] < 1600 && brand[key] >= 1) return key
    })
    if (
      typeof brand.numberOfLocations !== 'number' &&
      isNaN(brand.numberOfLocations)
    ) {
      if (closeKey) brand.numberOfLocations = parseInt(brand[closeKey])
      else brand.numberOfLocations = 1
    } else if (
      typeof brand.numberOfLocations !== 'number' &&
      !isNaN(brand.numberOfLocations)
    ) {
      brand.numberOfLocations = parseInt(brand.numberOfLocations)
      if (!(brand.numberOfLocations < 1600 && brand.numberOfLocations >= 1))
        if (closeKey) brand.numberOfLocations = parseInt(brand[closeKey])
        else brand.numberOfLocations = 1
    }
    brand.numberOfLocations = parseInt(brand.numberOfLocations)
  })
  return brands
}

export { numberOfLocations }
