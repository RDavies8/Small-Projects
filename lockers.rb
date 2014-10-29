def open_lockers num_lockers
	lockers = Array.new(num_lockers + 1, false)
	for i in 1..num_lockers
		num = i
		while num < num_lockers
			lockers[num] = inverse lockers[num]
			num += i
		end
	end
	total_open = 0
	for i in 1..num_lockers
		if lockers[i]
			total_open += 1
		end
	end
	puts "Total Lockers Open: #{total_open}" 

end

def inverse bool
	return false if bool
	return true
end

open_lockers 1000