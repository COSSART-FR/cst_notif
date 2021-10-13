local commandeTeste = true --> true to test in game with commande /cst_notif

local scp = "<span style='color:" --> ensuite votre couleur sous tout type de format css que vous voulez ne pas oubliez le ""
local cp = ";'>"
local ccp = "</span>"

if commandeTeste then
	RegisterCommand("cst_notif", function()
		cstNotification(scp.."black"..cp.."Ma Notification"..ccp..scp..'red'..cp.." !!!!!"..ccp, 5000, 'rgba(255,255,255,0.5)', 'supv', {'pricedown','20px'}, {'rotatein 1s','rotateout 1s'}, '10px', 'auto')
	end, false)
end

function cstNotification(txt, time, color, logo, font, anim, border, padding)
	local dataNotif = {
		message = txt,
		timing = time,
		rgba = color,
		image = logo,
		font = font,
		animation = anim,
		border = border,
		padding = padding,
	}
	SendNUIMessage(dataNotif)
end

RegisterNetEvent("cst:Notification")
AddEventHandler("cst:Notification", function(txt, time, color, logo, font, anim, border, padding)
	simpleNotification(txt, time, color, logo, font, anim, border, padding)
end)