import React from 'react';
import {characters, friends} from "../utils/Constants";
import Friend from "./Friend";

const DreamTeam = props => {

    return (
        <section className="float-right w-50 row no-gutters border">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.filter(item => item !== props.currentKey)
                .map((item, index) => <Friend
                    picture={characters[item].img}
                    name={characters[item].name}
                    key={index}
                    pos={index + 1}
                />)}
        </section>
    );
};

export default DreamTeam;