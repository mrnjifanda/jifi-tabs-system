# jifi-tabs-system
Crée simplement et facilement un systeme de tabs (HTML, CSS et Js) dans vos sites ou applications web

## Utilisation

Ajouter le fichier css et javascript dans votre page
```html
<link rel="stylesheet" href="dist/tabs.css">
<script src="dist/tabs.js"></script>
```

Simple utilisation

```html
<div class="jifi-tabs-systems">
    <ul class="jifi-tabs">
        <li class="jifi-tabs-li active">
            <a class="jifi-js-tabs" href="#tab1">Tab 1</a>
        </li>

        <li class="jifi-tabs-li">
            <a class="jifi-js-tabs" href="#tab2">Tab 2</a>
        </li>
    </ul>

    <div class="jifi-tabs-content">
        <div class="jifi-tab-content active" id="tab1">
            <h1>Tab Content 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div class="jifi-tab-content" id="tab2">
            <h1>Tab Content 2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
</div>
```

Changer de style
Actuelement uniquement 2 styles sont disponibles.

```html
<div class="jifi-tabs-systems" jifi-tabs-style="2"></div>
```

Ajouter une animation de transition
Actuelement uniquement l'animation fade est disponible.

```html
<div class="jifi-tabs-systems" jifi-tabs-transition="fade"></div>
```

Charger un contenu externe

```html
<li class="jifi-tabs-li">
    <a class="jifi-js-tabs" href="#ajaxtab" jifi-tabs-url="ajax-content.html" jifi-tabs-load="">Ajax Tab 1</a>
</li>
```

## Note

Le système utilise l'API fetch javascript pour charger les contenus externe, donc vous devez utiliser un server local (Live servr de Vs Code, Server interne de PHP, Ruby ou Node Js par exemple) pour le faire fonctionner le hors ligne.