import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi"
import { Loader } from "../com/UI/Loader"
import CountryCard from "../com/UI/CountryCard"
import SearchFilter from "../com/UI/SearchFilter"


const Country = () => {
 const [isPending , startTransition] = useTransition()
 const [countries , setCountries] = useState([])

//  for filter
const [search , setSearch] = useState()
const [filter , setFilter] = useState("all")
  useEffect(() => {
    startTransition(async() => {
      const res = await getCountryData()
      setCountries(res.data)
    })
  },[])

  if(isPending) return <Loader/>


  const searchCountry=(country) =>{
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return country
  }

  const filterRegionalCountry = (country) => {
    if(filter==='all') return country
    return country.region===filter
  }


  const filterCountry = countries.filter((country) => searchCountry(country) && filterRegionalCountry(country))
  return (
    <section className="country-section">

      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries}/>
      <ul className="grid grid-four-cols">
        {
          filterCountry.map((country , index) => {
            return <CountryCard country ={country} key={index} />
          })
        }
      </ul>
    </section>
  )
}

export default Country
