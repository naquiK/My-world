import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className="center-container-c">
      <div>
        <div className="card_2">
          <span className="card__hover">
            
            <img src={flags.svg} alt="" style={{ objectFit: "contain" }} />
            <span className="card__name">
              <p>
                <span className="card-description">Common Name: </span>
                {name.common}
              </p>
              <p>
                <span className="card-description">Official Name: </span>
                {name.official}
              </p>
            </span>
          </span>

          <figure className="card__figure">
            <img src={flags.svg} alt="" />
          </figure>

          <div className="card__info">
            <span className="card__name">
              {" "}
              <p className="card-title">{name.common}</p>
              <span className="card__ocupation">
                <p>
                  <span className="card-description">Population:</span>
                  {population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description">Region:</span>
                  {region}
                </p>
                <p>
                  <span className="card-description">Capital:</span>
                  {capital[0]}
                </p>{" "}
              </span>
              <div
                className="btn-center-country"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <NavLink to={`/country/${name.common}`}>
                  <button>Read More</button>
                </NavLink>
              </div>
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
