find . -name "*.jpg" | while read -r path; do
	
	path="$(echo "$path" | cut -c 3-)"
	echo "$path"


	if ! [[ $path == *"_thumbnail.jpg"* ]]; then

		thumbnail_path="$(echo "$path" | cut -f1 -d".")"
		thumbnail_path+="_thumbnail.jpg"
		echo "$thumbnail_path"
	
		if ! [ -f "$thumbnail_path" ]; then
			echo "$thumbnail_path does not exist"

			ffmpeg -i "$path" -vf scale=400:-1 "$thumbnail_path"
		fi
	fi
done