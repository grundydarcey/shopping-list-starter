import store from './store';

function showBookmarks() {
}

function addListener() {
    $('.top').on('click', '#button', event => {
        console.log('you clicked it');
    })
}