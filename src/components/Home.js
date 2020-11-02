import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {characters} from "../utils/Constants";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const key = this.props.match.params.hero || 'luke';
        if (characters[key]) {
            this.props.setHero(key);
        }
    }

    render() {
        return (
            <main className="clearfix">
                <Hero currentKey={this.props.currentKey}/>
                <DreamTeam currentKey={this.props.currentKey}/>
                <FarGalaxy/>
            </main>
        );
    };
}

export default Home;