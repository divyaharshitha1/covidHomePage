import './index.css'

const IndiaStats = props => {
  const {covidData, statesList} = props
  let activeCases = 0
  let confirmedCases = 0
  let recoveredCases = 0
  let deceasedCases = 0

  statesList.forEach(eachState => {
    if (covidData[eachState.state_code]) {
      const {total} = covidData[eachState.state_code]
      confirmedCases += total.confirmed ? total.confirmed : 0
      recoveredCases += total.recovered ? total.recovered : 0
      deceasedCases += total.deceased ? total.deceased : 0
    }
  })

  activeCases += confirmedCases - (recoveredCases + deceasedCases)

  return (
    <div className="container">
      <div className="stats-container">
        <div
          className="confirmed card" /* testid="countryWideConfirmedCases" */
        >
          <p className="stats-type confirmed-cases">Confirmed</p>
          <img
            src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1665915497/check-mark_1_dsxjxe.png"
            alt="country wide confirmed cases pic"
          />
          <p className="confirmed-cases cases">{confirmedCases}</p>
        </div>
        <div className="active card" /* testid="countryWideActiveCases" */>
          <p className="stats-type active-cases">Active</p>
          <img
            src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1665915864/protection_1_t3hwm5.png"
            alt="country wide active cases pic"
          />
          <p className="active-cases cases">{activeCases}</p>
        </div>
        <div
          className="recovered card" /* testid="countryWideRecoveredCases" */
        >
          <p className="stats-type recovered-cases">Recovered</p>
          <img
            src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1665916014/recovered_1_mpmmwf.png"
            alt="country wide recovered cases pic"
          />
          <p className="active-cases cases">{recoveredCases}</p>
        </div>
        <div className="deceased card" /* testid="countryWideDeceasedCases" */>
          <p className="stats-type deceased-cases">Deceased</p>
          <img
            src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1665914808/breathing_1_ovl7ma.png"
            alt="country wide deceased cases pic"
          />
          <p className="active-cases cases">{deceasedCases}</p>
        </div>
      </div>
    </div>
  )
}

export default IndiaStats
