const yearFounded = (brands: any[]): any[] => {
  brands.forEach((brand) => {
    let keys = Object.keys(brand)
    let closeKey = keys.find((key) => {
      if (
        !isNaN(brand[key]) &&
        brand[key] >= 1600 &&
        brand[key] <= new Date().getFullYear()
      )
        return key
    })
    if (!isNaN(brand.yearFounded))
      brand['yearFounded'] = parseInt(brand.yearFounded)

    if (
      brand.yearFounded < 1600 ||
      brand.yearFounded > new Date().getFullYear() ||
      isNaN(brand.yearFounded)
    ) {
      if (closeKey) brand['yearFounded'] = parseInt(brand[closeKey])
      else brand['yearFounded'] = 1600
    }
  })
  return brands
}

export { yearFounded }
