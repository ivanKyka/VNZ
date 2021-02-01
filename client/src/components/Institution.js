import React from 'react';
import * as institutionsData from "../consts/vvnzInfo";
import {Redirect, withRouter} from "react-router";

const Institution = withRouter(({match}) => {
    const name = match.params.name;
    const institutioninfo = Object.entries(institutionsData).find(([k]) => k === name);
    if (institutioninfo && institutioninfo[1]) {
        const data = institutioninfo[1];
        return (<>
            <h1>{data.title}</h1>
            <p>Адреса: {data.address}</p>
            <p>email: {data.email}</p>
            {data.link && <p><a href={data.link}>{data.link}</a></p>}
            <table>
                <tbody>
                {data.phones.map(phone => (<tr key={phone.title}>
                    <td>{phone.title}</td>
                    <td>{phone.phone}</td>
                </tr>))}
                </tbody>
            </table>
            {data.description && data.description.map(el => <p>{el}</p>)}
            {data.specialities && <h2>Напрями підготовки</h2>}
            {data.specialities && <ul>{data.specialities.map(el => <li>{el}</li>)}</ul>}
            {data.faculty && <h2>Факультети:</h2>}
            {data.faculty && data.faculty.map(el => (<div>
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <ul>
                    {el.specialities.map(speciality => <li key={speciality}>{speciality}</li>)}
                </ul>
            </div>))}
            <iframe src={`https://maps.google.com/maps?q=${data.coordinates}&z=17&output=embed`} width="100%" height="470" frameBorder="0"/>
        </>);
    }
    return <Redirect to={'/'} />;
});

export default Institution;