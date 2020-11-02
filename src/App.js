import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {characters, periodMonth} from "./utils/Constants";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentKey: 'luke'
        }
    }

    setHero = (key) => {
        let hero = JSON.parse(localStorage.getItem(key));
        if (!hero || (Date.now() - hero.time) > periodMonth) {
            fetch(characters[key].url)
                .then(response => response.json())
                .then(data => {
                    let info = {
                        "name": data.name,
                        "height": data.height,
                        "mass": data.mass,
                        "hair_color": data.hair_color,
                        "skin_color": data.skin_color,
                        "eye_color": data.eye_color,
                        "birth_year": data.birth_year,
                        "gender": data.gender
                    };
                    this.setState({hero: info});
                    hero = {
                        info,
                        time: Date.now()
                    };
                    localStorage.setItem(key, JSON.stringify(hero));
                });
        } else {
            this.setState({hero: hero.info});
        }
        this.setState({currentKey: key});
    }

    render() {
        return (
            <div className='container-fluid'>
                <Header currentKey={this.state.currentKey}
                        setHero={this.setHero}
                />
                <Main currentKey={this.state.currentKey}
                      currentHero={this.state.hero}
                      setHero={this.setHero}
                />
                <Footer/>
            </div>
        );
    }
}

export default App;