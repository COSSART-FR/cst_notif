# cst_notif
Système de notification en html/css/js/lua
(pas encore terminé mais fonctionnel!)

# server_side :
```
TriggerClientEvent("cst:simpleNotification", source, "My text", msec, "color", "logo")
```

# client_side :
```
exports["cst_notif"]:simpleNotification("My text", msec, "color", "logo")
```

[EN]
- if text/value(msec)/color/logo are undefined then data = [config.js]

[FR]
- Si vous ne paramètrer pas les paramêtre dans l'export ou l'event alors les paramètres non définit seront ceux du fichier [config.js]
- Pour utilisez les images personnalisé il vous suffit de mettre des images en .png dans le fichier [img] et des le paramètre __logo__ mettre le nom de celle-ci sous forme d'un string "supv" sans le .png