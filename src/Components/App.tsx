import * as React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {Route, Routes} from "react-router-dom";
import Authorization from "./Authorization";
import SearchCompany from "./SearchCompany";
import ResultsSearch from "./ResultsSearch";


function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Main /> } />
                <Route path='/login' element={ <Authorization /> } />
                <Route path='/search' element={ <SearchCompany /> } />
                <Route path='/result' element={ <ResultsSearch /> } />
            </Routes>
            <Footer />
        </>
    )
}

export default App;