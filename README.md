# cst_notif
version : bêta

# server_side :
```
TriggerClientEvent("cst:simpleNotification", source, "My text", msec)
```

# client_side :
```
exports["cst_notif"]:simpleNotification("My text", msec)
```

msec = time, if undefined then time = 7000msec
=======
