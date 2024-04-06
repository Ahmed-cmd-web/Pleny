const brandName = (brands: any[]): any[] => {
  brands.forEach((brand) => {
    let closeKey = Object.keys(brand).find((key) => {
      let keyL = key.toLowerCase()
      return (
        (keyL.includes('brand') || keyL.includes('name')) &&
        typeof brand[key] === 'string'
      )
    })
    if (!brand.brandName || typeof brand.brandName !== 'string') {
      if (closeKey) brand['brandName'] = brand[closeKey].toString()
      else brand['brandName'] = ''
    }
  })
  return brands
}

export { brandName }
