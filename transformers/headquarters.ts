const headquarters = (brands: any[]): any[] => {
  brands.forEach((brand) => {
    let closeKey = Object.keys(brand).find((key) => {
      let keyL = key.toLowerCase()
      return (
        (keyL.includes('headquarter') || keyL.includes('hq')) &&
        typeof brand[key] === 'string'
      )
    })
    if (!brand.headquarters || typeof brand.headquarters !== 'string') {
      if (closeKey) brand['headquarters'] = brand[closeKey].toString()
      else brand['headquarters'] = brand.headquarters.toString()
    }
  })
  return brands
}

export { headquarters }
