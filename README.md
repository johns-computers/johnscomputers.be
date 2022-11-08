# johnscomputers.be

  

## Installation

  

On peux installer le site sur un simple serveur apache2. Pour ca il faut simplement utilerser le dossier "public"

## Configuration

### Multilang
Pour installer le multilang sur le site il faut editer les fichier dans le dossier "public/assets/json/langs/". Dans ceux-ci il faux editer le json.  Dans le Array "elms" de chaque fichier on peux ajouter des element du site a traduire.
Example:
```
{ 
	"querySelector": "#id or .class",
	"text": "Le Text a Traduire"
},
```
Le champ "querySelector" doit contenir le nom d'un ID ou CLASS qui est present dans html d'une page du site.
Le champ "text" doit contenier le text ou de l'html traduit dans la lange du fichier.

Le site va automatiquement charger le fichier correct en fonction de la lange de la personne que charge le site.

### Routing
Le Rouchting se fait automatiquement mais on peux le changer dans les fichier html du site "index.html", "pro/index.html", "assets/html",

### Colors
Les couleur sont des variable CSS et peuve etre changer dans le fichier "/assets/css/utils/global.css"