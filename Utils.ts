import { Brand } from './brands-schema'

class Utils {
  static flattenObject = (brands: { [key: string]: any }[]): any[] => {
    brands.forEach((brand: any) => {
      let keys = Object.keys(brand)
      keys.forEach((key) => {
        this.flattenObjectPrivate(key, brand)
      })
    })
    return brands
  }

  private static flattenObjectPrivate(
    key: string,
    obj: { [key: string]: any }
  ): void {
    if (obj[key]?.constructor !== Object) {
      return
    }

    Object.keys(obj[key]).forEach((subKey) => {
      this.flattenObjectPrivate(subKey, obj[key])
      if (obj[key][subKey]?.constructor !== Object) return

      Object.keys(obj[key][subKey]).forEach((subSubKey) => {
        obj[key][`${subKey}_${subSubKey}`] = obj[key][subKey][subSubKey]
      })
      delete obj[key][subKey]
    })
    Object.keys(obj[key]).forEach((subKey) => {
      obj[`${key}_${subKey}`] = obj[key][subKey]
    })
    delete obj[key]
  }

  static validate = (
    brands: { [key: string]: any }[]
  ): { [key: string]: any }[] => {
    brands.forEach((brand) => {
      let errors = new Brand(brand).validateSync()
      if (errors) throw new Error(errors.message)
    })
    return brands
  }
  static saveAll = (brands: { [key: string]: any }[]): void => {
    brands.forEach((brand) => {
      console.log(brand)

      Brand.findByIdAndUpdate(brand._id, brand, {
        upsert: true,
        setDefaultsOnInsert: true,
      })
    })
  }
}

export default Utils
