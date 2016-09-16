import React from 'react';
import {
    Route,
    Router,
    IndexRoute,
    IndexRedirect,
    hashHistory,
    browserHistory
} from 'react-router';

// Pages
import Main from 'Main';


// ######### MIN SIDE
import Koeberkatotek from 'Koeberkatotek';
import Meddelelser from 'Meddelelser';
import Statestik from 'Statestik';
import MinProfil from 'MinProfil';
import TilDig from 'TilDig';
import Sagen from 'Sagen';

import Sagen_Index from 'Sagen_Index';
import Sagen_Budrunde from 'Sagen_Budrunde';
import Sagen_Tidslinje from 'Sagen_Tidslinje';
import Sagen_Dokumenter from 'Sagen_Dokumenter';
import Sagen_Billeder from 'Sagen_Billeder';
import Sagen_Markedsfoering from 'Sagen_Markedsfoering';
//



//

export default(
    <Router history={hashHistory}>

        <Route name="Home" path='/' component={Main}>

            <Route name="Til dig" path="TilDig" component={TilDig}></Route>
            <Route name="Køberkartotek" path="koeberkatotek" component={Koeberkatotek}></Route>
            <Route name="Meddelelser" path="meddelelser" component={Meddelelser}></Route>
            <Route name="Statestik" path="statestik" component={Statestik}></Route>
            <Route name="Min profil" path="min-profil" component={MinProfil}></Route>
            <Route name="Sagen" path="sagen" component={Sagen}>
              <IndexRoute component={Sagen_Index} />
              <Route name="Budrunde" path="budrunde" component={Sagen_Budrunde}></Route>
              <Route name="Tidslinje" path="tidslinje" component={Sagen_Tidslinje}></Route>
              <Route name="Dokumenter" path="dokumenter" component={Sagen_Dokumenter}></Route>
              <Route name="Billeder" path="billeder" component={Sagen_Billeder}></Route>
              <Route name="Markedsfoering" path="markedsfoering" component={Sagen_Markedsfoering}></Route>



            </Route>



        </Route>
    </Router>
);
