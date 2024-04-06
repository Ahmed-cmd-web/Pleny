const filter = (brands: { [key: string]: any }[]): { [key: string]: any }[] => {
  let fields = [
    '_id',
    'brandName',
    'yearFounded',
    'headquarters',
    'numberOfLocations',
  ]
  return brands.map((brand) => {
    Object.keys(brand).forEach((key) => {
      if (!fields.includes(key)) delete brand[key]
    })
    return brand
  })
}

export { filter }
