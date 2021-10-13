# cst_notif
Système de notification en html/css/js/lua
(pas encore terminé mais fonctionnel!)

# server_side :
```
TriggerClientEvent("cst:Notification", source, "txt", time, "color", "logo", {"font","fontSize"}, {"AnimIn","AnimeOut"}, "border", "padding")


# client_side :
```
exports["cst_notif"]:cstNotification("Mon texte", 2500, "rgba(255,255,255,0.5)", "monLogo", {"votrePolice", "TaillePolice"}, {"AnimIn seconde", "AnimeOut seconde"}, "30px", "auto")
```

[EN]
- if text/value(msec)/color/logo are undefined then data = [config.js]

[FR]
- Si vous ne paramètrer pas les paramêtre dans l'export ou l'event alors les paramètres non définit seront ceux du fichier
- Pour importer une police il suffit juste de la déclarer dans le css et de la mettre sous format .ttf
```
@font-face {
    font-family: votrePolice;
    src: url('fonts/votrePolice.ttf');
}
/* Ainsi quand vous utilisez la notification dans le paramètre notif : "votrePolice" */

/* Ou via import : */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");
```
[config.js]
- Pour utilisez les images personnalisé il vous suffit de mettre des images en .png dans le fichier [img] et des le paramètre __logo__ mettre le nom de celle-ci sous forme d'un string "supv" sans le .png

//Liste des animations : 

> anim
> animremove

> rotatein
> rotateout

> shorten

> scalein
> scaleout

> fadein
> fadeout

> insert-left
> insert-top
> insert-bottom
> insert-right