import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {RoutePath} from './src/types/routes'
import StartPage from './src/pages/StartPage'

const Router = () =>{
    return(
        <Routes>
            <Route path={RoutePath.START} element={<StartPage/>}/>
        </Routes>
    )
}

export default Router;