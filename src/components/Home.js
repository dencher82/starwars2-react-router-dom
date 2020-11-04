import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {defaultHero, friends} from "../utils/Constants";
import {Redirect} from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.hero = defaultHero;
        this.existHero = true;
    }

    getHero = () => {
        let existHero = true;
        let hero = this.props.match.params.hero || this.props.hero;
        if (!friends.includes(hero)) {
            hero = defaultHero;
            existHero = false;
        }
        this.hero = hero;
        this.existHero = existHero;
    }

    componentDidMount() {
        this.getHero();
        this.props.changeHero(this.hero);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.hero !== prevProps.match.params.hero){
            this.getHero();
            this.props.changeHero(this.hero);
        }
    }

    render() {
        // const hero = this.getHero();
        if (this.existHero) {
            return (
                <main className="clearfix">
                    <Hero hero={this.hero}/>
                    <DreamTeam
                        hero={this.hero}
                        // changeHero={this.props.changeHero}
                    />
                    <FarGalaxy/>
                </main>
            );
        } else {
            return <Redirect to={`/error`}/>;
        }
    }
}

export default Home;