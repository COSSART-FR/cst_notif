RegisterCommand("notif", function()
	cstNotif()
end, false)

function cstNotif()
	SendNUIMessage({
		action = true
	})
end