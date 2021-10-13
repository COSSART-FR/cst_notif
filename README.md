# cst_notif
Système de notification en html/css/js/lua <br>
Preview : https://streamable.com/2gz6vc

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
