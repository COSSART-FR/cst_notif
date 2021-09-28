RegisterCommand("notif", function()
	cstNotif()
end, false)

function cstNotif()
	--Citizen.CreateThread(function()
	--	while true do
	--		Citizen.Wait(5.0)
			SendNUIMessage({
				action = true
			})
	--	end
	--end)
end