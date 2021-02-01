import {DOMAIN_URL} from "../consts";
import {mergeDeep} from "./mergeObjects";

export const http = {
    get: async url => {
        const response = await fetch(`${DOMAIN_URL}${url}`);
        if (response.ok) return await response.json();
        else throw Error(await response.text());
    },

    post: async (url, body, options = {}) => {
        const response = await fetch(`${DOMAIN_URL}${url}`, Object.assign( {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: body
        }, options));

        if (response.ok) {
            if (response.headers.get("Content-Type").includes('text/plain')) return await response.text();
            return await response.json();
        }
        else throw Error(await response.text());
    },

    put: async (url, body) => {
        const response = await fetch(`${DOMAIN_URL}${url}`, {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(body)
        });
        if (response.ok) return await response.json();
        else throw Error(await response.text());
    },

    delete: async url => {
        const response = await fetch(`${DOMAIN_URL}${url}`, {
            method: 'DELETE'
        });
        if (response.ok) return await response.json();
        else throw Error(await response.text());
    }
}
