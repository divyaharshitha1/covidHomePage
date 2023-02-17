import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'

import IndianState from '../IndianState'
import './index.css'

const AllStateCases = props => {
  const {covidData, statesList} = props
  const statesData = statesList.map(eachState => ({
    stateName: eachState.state_name,
    stateCode: eachState.state_code,
    confirmed: Object.keys(covidData)
      .filter(state => state === eachState.state_code)
      .map(e => covidData[e].total.confirmed),
    recovered: Object.keys(covidData)
      .filter(state => state === eachState.state_code)
      .map(e => covidData[e].total.recovered),
    deceased: Object.keys(covidData)
      .filter(state => state === eachState.state_code)
      .map(e => covidData[e].total.deceased),
    other: Object.keys(covidData)
      .filter(state => state === eachState.state_code)
      .map(e => covidData[e].total.other),
    population: Object.keys(covidData)
      .filter(state => state === eachState.state_code)
      .map(e => covidData[e].meta.population),
  }))

  const onClickSortingAsc = () => {
    statesData.sort((a, b) =>
      a.stateName.toUpperCase() > b.stateName.toUpperCase() ? 1 : -1,
    )
    console.log(statesData)
  }

  const onClickSortingDesc = () => {
    statesData.sort((a, b) =>
      a.stateName.toUpperCase() > b.stateName.toUpperCase() ? -1 : 1,
    )
    console.log(statesData)
  }

  return (
    <div className="container">
      <div className="stats-table" /* testid="stateWiseCovidDataTable" */>
        <div className="table-header">
          <div className="states-name-column">
            <p className="table-header-title">States/UT</p>
            <div className="icons-container">
              <button
                className="sorting-icon"
                type="button"
                onClick={onClickSortingAsc}
              >
                <FcGenericSortingAsc size={20} />
              </button>
              <button
                className="sorting-icon"
                type="button"
                onClick={onClickSortingDesc}
              >
                <FcGenericSortingDesc size={20} />
              </button>
            </div>
          </div>
          <div className="table-column">
            <p className="table-header-title">Confirmed</p>
          </div>
          <div className="table-column">
            <p className="table-header-title">Active</p>
          </div>
          <div className="table-column">
            <p className="table-header-title">Recovered</p>
          </div>
          <div className="table-column">
            <p className="table-header-title">Deceased</p>
          </div>
          <div className="table-column">
            <p className="table-header-title">Population</p>
          </div>
        </div>
        <hr className="line" />
        <ul className="state-stats-container">
          {statesData.map(state => (
            <IndianState key={state.stateCode} state={state} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AllStateCases
