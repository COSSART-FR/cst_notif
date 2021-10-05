local commandeTeste = false --> true to test in game with commande /cst_notif

if commandeTeste then
	RegisterCommand("cst_notif", function()
		simpleNotification("<span style='color:green;'>My</span><span style='color:red;'>Notification</span>", 2500, "rgba(255,255,255,0.50)", "supv")
	end, false)
end

--[[EXPORTS]]--
function simpleNotification(txt, time, color, logo)
	SendNUIMessage({
		action = true,
		message = txt,
		timing = time,
		rgba = color,
		image = logo,
	})
end
--[[EVENT SERVER]]--
RegisterNetEvent("cst:simpleNotification")
AddEventHandler("cst:simpleNotification", function(txt, time, color, logo)
	simpleNotification(txt, time, color, logo)
end)