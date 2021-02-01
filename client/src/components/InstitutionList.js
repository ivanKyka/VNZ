import React from 'react';
import {List, ListItem} from "./News";
import {Link} from "react-router-dom";
import {logosLinks} from "../consts";

const InstitutionList = ({infoList}) => {
    return (
        <List>
            {Object.entries(infoList).map(([k, v]) => (
                <ListItem key={k}>
                    <Link to={`/institution/${k}`}>
                        <img src={logosLinks[k]} alt="ВВНЗ ЛОГО"/>
                        <p>{v.title}</p>
                    </Link>
                </ListItem>
            ))}
        </List>
    )
}

export default InstitutionList;