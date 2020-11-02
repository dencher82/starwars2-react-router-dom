import React from 'react';
import styles from '../css_modules/aboutMe.module.css';
import {characters} from "../utils/Constants";

class AboutMe extends React.Component {
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
            <div>
                {(this.props.currentHero) &&
                <div className={`farGalaxy ${styles.hero_box}`}>
                    <p><span className={styles.hero_titles}>name:</span> {this.props.currentHero.name}</p>
                    <p><span className={styles.hero_titles}>height:</span> {this.props.currentHero.height}</p>
                    <p><span className={styles.hero_titles}>birth year:</span> {this.props.currentHero.birth_year}</p>
                    <p><span className={styles.hero_titles}>gender:</span> {this.props.currentHero.gender}</p>
                    <p><span className={styles.hero_titles}>mass:</span> {this.props.currentHero.mass}</p>
                    <p><span className={styles.hero_titles}>hair color:</span> {this.props.currentHero.hair_color}</p>
                    <p><span className={styles.hero_titles}>skin color:</span> {this.props.currentHero.skin_color}</p>
                    <p><span className={styles.hero_titles}>eye color:</span> {this.props.currentHero.eye_color}</p>
                </div>
                }
            </div>
        )

    }
}

export default AboutMe;