import React from 'react';
import Navigation from "./Navigation";
import {characters} from "../utils/Constants";

const Header = props => {

    return (
        <header>
            <Navigation currentKey={props.currentKey}/>
            <h1 className="text-center py-3">{characters[props.currentKey].name}</h1>
        </header>
    );
};

export default Header;