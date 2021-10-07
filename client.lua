local commandeTeste = true --> true to test in game with commande /cst_notif

if commandeTeste then
	RegisterCommand("cst_notif", function()
		--simpleNotification("<span style='color:green;'>My</span><span style='color:red;'>Notification</span>", 2500, "rgba(255,255,255,0.50)",'no',_,'pricedown', _,'50px')
		simpleNotification("<span style='color:green;'>My</span><span style='color:red;'>Notification</span>", 2500, "rgba(0,0,0,0.50)",'supv',_,'pricedown', _,'auto')
	end, false)
end

--[[EXPORTS]]--
function simpleNotification(txt, time, color, logo, border, font, fontSize, padding, anim)
	SendNUIMessage({
		action = true,
		message = txt,
		timing = time,
		rgba = color,
		image = logo,
		border = border,
		font = font,
		fontSize = fontSize,
		padding = padding,
		animation = anim,
	})
end
--[[EVENT SERVER]]--
RegisterNetEvent("cst:simpleNotification")
AddEventHandler("cst:simpleNotification", function(txt, time, color, logo, border, font, fontSize, padding, anim)
	simpleNotification(txt, time, color, logo, border, font, fontSize, padding, anim)
end)