fx_version 'adamant'
game 'gta5'

name 'cst_notif'
author 'COSSART & SUP2Ak'
description 'Notification'

version '1.0'
ui_page "ui/index.html"

files {
  "ui/index.html",
  "ui/config.js",
  "ui/script.js",
  "ui/style.css",
  "ui/img/*.png",
  "ui/fonts/*.ttf"
}

client_scripts {
  'client.lua',
}

export {
  'cstNotification'
}
