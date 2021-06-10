/* Base code Mr NJIFANDA (https://www.njifanda.com/open-source/jifi-tabs-system)
 * Code soumis à notre License pour toutes utilisations ou modifications
 * Author : Mr NJIFANDA
 * Author URL: http://njifanda.com
 * Date create: 12-01-2017
 * Date Update: 18-02-2021 09:45AM
 */

const afficherOnglet = function(a) {
    const validTransition = new Array(['fade']),
          li = a.parentNode,
          div = a.parentNode.parentNode.parentNode,
          activeTab = div.querySelector('.jifi-tab-content.active'),
          aAfficher = div.querySelector(a.getAttribute('href')),
          transition = div.getAttribute("jifi-tabs-transition");

    if (li.classList.contains('active')) {
        return false;
    }

    // On retire la class active de l'onglet actif
    div.querySelector('.jifi-tabs .active').classList.remove('active');

    // On ajoute la class active à l'onglet actuel
    li.classList.add('active');

    if (transition === null || !validTransition.indexOf(transition)) {
        activeTab.classList.remove('active');
        aAfficher.classList.add('active');
    } else {
        if (transition === 'fade') {
            activeTab.classList.add('fade');
            activeTab.classList.remove('in');
            const transitionend = function() {
                this.classList.remove('fade');
                this.classList.remove('active');
                aAfficher.classList.add('active');
                aAfficher.classList.add('fade');
                aAfficher.offsetWidth;
                aAfficher.classList.add('in');
                activeTab.removeEventListener('transitionend', transitionend);
                activeTab.removeEventListener('webkitTransitionend', transitionend);
                activeTab.removeEventListener('oTransitionend', transitionend);
            }
            activeTab.addEventListener('transitionend', transitionend)
            activeTab.addEventListener('webkitTransitionend', transitionend)
            activeTab.addEventListener('oTransitionend', transitionend)
        }
    }

}

const getTabContent = async function (elem, url) {
    const loader = document.createElement("span");
    loader.classList.add("jifi-tabs-loader");
    loader.innerHTML = "<span></span>";
    elem.appendChild(loader);

    try {
        const response = await fetch(url, {headers: {'X-Requested-With': 'XMLHttpRequest'}});

        if (response.status === 200 && response.ok) {
            const data = await response.text(),
                  parent = elem.parentNode.parentNode.parentNode,
                  div = parent.querySelector(elem.getAttribute('href'));

            div.innerHTML = data;
            afficherOnglet(elem);
            elem.setAttribute("jifi-tabs-load", "load");
        } else {
            alert(response.status)
        }

    } catch (e) {
        console.log(e);
    }

    const removeLoader = elem.querySelector("span.jifi-tabs-loader");
    removeLoader.remove()
}

const loadeContent = function (item) {
    if(item.classList.contains('jifi-js-tabs')){
        const url = item.getAttribute("jifi-tabs-url");

        if (url && url !== "" && item.getAttribute("jifi-tabs-load") !== 'load') {
            getTabContent(item, url);
        } else {
            afficherOnglet(item);
        }
    }
}

/**
 * Je recupere le hash
 * Ajouter la class active sur le lien href="hash"
 */
const hashChange = function() {
    const hash = window.location.hash,
          a = document.querySelector('a[href="' + hash + '"]');

    if (a !== null && !a.parentNode.classList.contains('active')) {
        loadeContent(a);
    }
}

if (window.location.hash !== "") {
    window.addEventListener('hashchange', hashChange)
    hashChange();
}

document.querySelector('body').addEventListener('click', (e) => {
    loadeContent(e.target);
});