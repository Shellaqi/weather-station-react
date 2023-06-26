import React, { createContext} from 'react'
import { useImmer } from 'use-immer';


export const AppContext =  createContext();

function AppContextProvider(props) {

    const [state, setState] = useImmer({
        search: '',
        selctedCityInfo: {},
        unitTemp: 'C'
    })

  return (
    <AppContext.Provider 
        value={[state, setState]}>

        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider