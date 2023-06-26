import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

export default function Headers() {
    const [state, setState] = useContext(AppContext);

  return (
    <>
        <h1
            className='text-header'
        >
            Weather App
        </h1>

        <div className="search-box">
            <div className="search-container">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                    value={state.search}
                    onChange={(event) => {
                        const newSearch = event.target.value;
                        setState((draft) => {
                            draft.search = newSearch;
                        });
                    }}
                />

                <button
                    className={
                        `
                        search-button +
                        ${(state?.selctedCityInfo?.main?.temp > Number(12 + 273.15))
                            ? 'button-warm'
                            : 'button-cold'
                        }
                    `
                    }
                    onClick={() => {
                        // const result = await fetchCityWeatherInfo((appState?.search || '').toLowerCase())
                        // immutableSetState((draft) => {
                        //     draft.selctedCityInfo = result;
                        // });
                    }}
                >
                    Find
                </button>
            </div>
        </div>
    </>
);
}
