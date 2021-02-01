const needle = require('needle');
const parse = require('node-html-parser').parse;
const vitiURL = 'http://www.viti.edu.ua';
const hnupsURL = 'http://www.hups.mil.gov.ua';
const asvURL = 'https://www.asv.gov.ua/';
const vaoURL = 'http://vaodesa.mil.gov.ua/news/latest.html';

function parseViti(data) {
    const root = parse(data.body);
    return root.querySelectorAll('.all_news').map(el => {
        const data = el.removeWhitespace();
        const dateInfo = data.firstChild.innerText.split('.');
        return ({
            date: new Date(dateInfo[2], dateInfo[1] - 1, dateInfo[0]),
            title: data.lastChild.innerText,
            href: vitiURL + data.lastChild.getAttribute('href'),
            source: 'viti'
        })
    })
}

function parseHnups(data) {
    const root = parse(data.body);
    return root.querySelector('.rp-news-list').removeWhitespace().childNodes.map(el => {
        const dateInfo = el.querySelector('.post-date').innerText.split('/')
        return {
            date: new Date(dateInfo[2], dateInfo[1] - 1, dateInfo[0]),
            title: el.querySelector('a').innerText,
            href: el.querySelector('a').getAttribute('href'),
            source: 'hnups'
        }
    })
}

function parseAsv(data) {
    const root = parse(data.body);
    return root.querySelector('.view-front-page-news.view-id-front_page_news')
        .removeWhitespace()
        .querySelector('.view-content')
        .querySelector('.item-list')
        .querySelector('ul').childNodes
        .map(el => el.querySelector('.field-content'))
        .map(el => {
            const currentYear = new Date().getFullYear();
            const dateInfo = el.childNodes[0].childNodes[0].innerText.split('.')
            return {
                date: new Date(currentYear, dateInfo[1] - 1, dateInfo[0]),
                title: el.querySelector('a').innerText,
                href: asvURL + el.querySelector('a').getAttribute('href'),
                source: 'asv'
            }
        })

}

function parseVao(data) {
    const root = parse(data.body);
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const months = {
        'груд.': 11,
        'січ.': 0,
        'лют.': 1,
        'бер.': 2
    }
    return root.querySelectorAll('.blog-post-in')
        .map(el => {
            const dateInfo = el.removeWhitespace().querySelector('.blog-calendar').childNodes;
            const day = dateInfo[0].innerText;
            const year = currentMonth - months[dateInfo[1].innerText] < 0 ? currentYear - 1 : currentYear
            const titleData = el.removeWhitespace().querySelector('.blog-head a');
            return {
                date: new Date(year, months[dateInfo[1].innerText], day),
                title: titleData.innerText,
                href: vaoURL.substr(0,26) + titleData.getAttribute('href'),
                source: 'vao'
            }
        })
}

function getAllData() {
    return Promise.all([
        needle('get', vitiURL).then(parseViti),
        needle('get', hnupsURL).then(parseHnups),
        needle('get', asvURL).then(parseAsv),
        needle('get', vaoURL).then(parseVao)
    ]).then(data => data.reduce((acc,el) => [...acc, ...el], []))
}

module.exports = getAllData;
