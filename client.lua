local commandeTeste = false

if commandeTeste then
	RegisterCommand("cst_notif", function()
		simpleNotification()
	end, false)
end

--[[EXPORTS]]--
function simpleNotification(txt, time)
	SendNUIMessage({
		action = true,
		message = txt,
		timing = time
	})
end
--[[EVENT SERVER]]--
RegisterNetEvent("cst:simpleNotification")
AddEventHandler("cst:simpleNotification", function(txt, time)
	simpleNotification(txt, time)
end)