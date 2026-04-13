import axios from 'axios'

const api = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
})

const FIELDS = 'name,capital,region,population,flags,cca3'

export const getAllCountries = () => {
  return api.get(`/all?fields=${FIELDS}`)
}

export const getCountriesByRegion = (region) => {
  return api.get(`/region/${region}?fields=${FIELDS}`)
}