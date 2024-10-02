import countryFacts from '../com/api/countryData.json'
const About = () => {
  return (
   <section className="section-about container">
    <h3 className="container-title">
        Here are Interesting Facts
        <br />
        We`r proud of
    </h3>

    <div className="gradient-cards">
        {countryFacts.map((country) => {
            const {id,countryName,capital,population,interestingFact} = country
            return(
                <div className="card" key={id}>
                <div className="container-card bg-blue-box">
                    <p className="card-title">{countryName}</p>
                    <p>
                        <span className="card-description">Capital:</span>
                        {capital}
    
                    </p>
                    <p>
                        <span className="card-description">Population:</span>
                        {population}
                        
                    </p>
                    <p>
                        <span className="card-description">Interesting Fact:</span>
                        {interestingFact}
                        
                    </p>
                   
                </div>
            </div>
            )
        })}
       
    </div>
   </section>
  )
}

export default About
