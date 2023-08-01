export interface CountryProps {
  name: {
    common: string
    official: string
    nativeName:{
      [key: string]: {
        official: string
      }
    }
  }
  flags: {
    svg: string
    alt: string
  }
  cca2: string
  ccn3?: string
  cca3?: string
  cioc?: string
  population: number
  capital: string
  region: string
  subregion: string
  tld: string
  currencies:{
    [key: string]: {
      name: string
    }
  }
  languages: string
  borders: string[]
}

export interface FilterProps {
  region: string
}

