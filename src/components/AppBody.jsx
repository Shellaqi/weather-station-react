import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import tempretureConversion from '../common/tempretureConversion'
import dateBuilder from '../common/dateBuilder'

export default function AppBody() {
    const [state, setState] = useContext(AppContext);

    const temprature = tempretureConversion(state?.selctedCityInfo, state?.unitTemp)    

    if (!state?.selctedCityInfo?.status) {
        return <h1
            className="text-explain"
        >
            please write the city name
        </h1>
    }


    if (state?.selctedCityInfo?.message) {
        return <h1
            className="text-explain"
        >
            {
                state?.selctedCityInfo?.message
            }
        </h1>
    }

    return (
        <div
            className='search-box'
        >

            <div className="location-box">

                <div className="location">
                    {`${state?.selctedCityInfo?.name}, ${state?.selctedCityInfo?.sys?.country}`}
                </div>
                <div className="date">
                    {dateBuilder(new Date())}
                </div>
            </div>
            {
                temprature?.temp 
                && <>
            <div className="weather-box">
                <div className="temp">
                    <h1 className='main-Temp'>
                        {temprature?.temp || ''}

                    </h1>
                    <small>
                        Feels: {temprature?.feels_like}
                        <br />
                    </small>
                    <br />
                    <p className='wind'>
                        <span>
                            <i className="fa-solid fa-wind"></i>
                        </span>
                        {' '}
                        {state?.selctedCityInfo?.wind?.speed}m/s
                    </p>
                    <br />
                    <small>
                        Humidity
                        {' '}
                        {state?.selctedCityInfo?.main?.humidity}%
                    </small>

                </div>

                <div className="weather">
                    {/* {state?.selctedCityInfo?.weather[0]?.description} */}
                </div>

            </div>
            <div
                className='convert-button-container'
            >
                <button
                    className={
                        `
                    convert-button +
                    ${(state?.selctedCityInfo?.main?.temp > Number(12 + 273.15))
                            ? 'button-warm'
                            : 'button-cold'
                        }
                `
                    }
                    onClick={async () => {
                        setState((draft) => {
                            if (state?.unitTemp === 'C') {
                                draft.unitTemp = 'F';
                                return;
                            }
                            draft.unitTemp = 'C';
                        });
                    }}
                >
                    Convert in {state?.unitTemp === 'C' ? 'Fahrenheit' : 'Celsius'}
                </button>
            </div>
                
                </>
            }

        </div>
    )
}
