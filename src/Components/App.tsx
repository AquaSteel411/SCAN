import * as React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {Route, Routes} from "react-router-dom";
import Authorization from "./Authorization";
import SearchCompany from "./SearchCompany";
import ResultsSearch from "./ResultsSearch";
import {useEffect, useState} from "react";
import moment from "moment-timezone";


function App() {

    const [loginUser, setLoginUser] = useState(localStorage.getItem('loginUser'))
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'))
    const [expire, setExpire] = useState(localStorage.getItem('expire'))
    const [resultSearch, setResultSearch] = useState([])
    const [ids, setIds] = useState([])

    const date = moment(new Date).utc().format()

    useEffect(() => {
        if (moment(expire).utc().format() < date) {
            localStorage.clear()
            setAccessToken('');
            setLoginUser('');
            setExpire('');
        }
    }, [loginUser, expire, accessToken])

    return (
        <>
            <Header username={loginUser} setAccessToken={setAccessToken}
                    setLoginUser={setLoginUser} setExpire={setExpire} accessToken={accessToken} />
            <Routes>
                <Route path='/' element={ <Main /> } />
                <Route path='/login' element={ <Authorization setLoginUser={setLoginUser}
                                                              setAccessToken={setAccessToken}
                                                              setExpire={setExpire} /> } />
                <Route path='/search' element={ <SearchCompany accessToken={accessToken}
                                                               setResultSearch={setResultSearch}
                                                               setIds={setIds}
                                                               loginUser={loginUser} /> } />
                <Route path='/result' element={ <ResultsSearch accessToken={accessToken}
                                                               resultSearch={resultSearch}
                                                               ids={ids}
                                                               loginUser={loginUser} /> } />
            </Routes>
            <Footer />
        </>
    )
}

export default App;