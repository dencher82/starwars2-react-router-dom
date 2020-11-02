import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/Constants";
import {Switch, Route} from 'react-router-dom';
import ErrorPage from "./ErrorPage";

const Main = (props) => {
    return (
        // STEP 2
        <Switch>
            <Route path={['/', `/${homePage}`, `/${homePage}/:hero`]} exact
                   render={routeProps => <Home match={routeProps.match}
                                               setHero={props.setHero}
                                               currentKey={props.currentKey}
                   />}
            />
            <Route path={[`/${aboutMePage}`, `/${aboutMePage}/:hero`]} exact
                   render={routeProps => <AboutMe match={routeProps.match}
                                                  setHero={props.setHero}
                                                  currentHero={props.currentHero}
                   />}
            />
            <Route path={`/${starWarsPage}`} exact component={StarWars}/>
            <Route path={`/${contactPage}`} exact><Contact/></Route>
            <Route component={ErrorPage}/>
        </Switch>
    )
};

export default Main;