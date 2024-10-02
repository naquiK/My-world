

const SearchFilter = ({search ,setSearch , filter , setFilter ,countries ,setCountries}) => {

    const handerInputChanger =(event) => {
        event.preventDefault()
        setSearch(event.target.value)
    }

    const handlerSelectChanger =(event) =>{
        event.preventDefault()
        setFilter(event.target.value)
    }

    const sortCountries = (value)=> {
        const sortCounties = [...countries].sort((a, b) => {
            return value === "asc"
              ? a.name.common.localeCompare(b.name.common)
              : b.name.common.localeCompare(a.name.common);
          });
        setCountries(sortCounties)
    }
    return (
    <section className="section-searchFilter container box-new">
        <input type="text" placeholder="search" value={search} onChange={handerInputChanger} className="search-bar"/>
      
        <div>
        <button onClick={() => sortCountries("asc")}>Ascending</button>
      </div>

      <div>
        <button onClick={() => sortCountries("des")}>Descending</button>
      </div>

      

        <div>
            <select className="select-section" value={filter} onChange={handlerSelectChanger}> 
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
  )
}

export default SearchFilter
