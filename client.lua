RegisterCommand("notif", function()
	SendNUIMessage({
		createNotification()
	})
end, false)