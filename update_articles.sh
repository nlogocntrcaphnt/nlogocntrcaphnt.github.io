articles_in_file_count="$(ls pages/archive/articles/ | grep "Article_" | sort | wc -l)"
echo $articles_in_file_count

articles_in_HTML_count="$(cat pages/archive/archive.html | grep "Article_" | sort | wc -l)"
echo $articles_in_HTML_count

if  [ "$articles_in_file_count" -gt "$articles_in_HTML_count" ]; then
	for (( i="$articles_in_HTML_count"; i < "$articles_in_file_count"; i++ )) ; {
		counter=$((i+1))
		filename="$(ls pages/archive/articles/ | grep "Article_" | sort | tail -n+${counter} | head -1)"
		echo $filename

		title="$(cat pages/archive/articles/${filename} | grep "<title>" | sed 's/^[^>]*>//' | cut -d "<" -f1)"
		echo $title

		head -n -5 pages/archive/archive.html > archive.html

		echo "					<div class=\"post-container\">
						<div id=\"post-$counter\" class=\"post\">
							<a href=\"#\" onclick='loadHTML(\"content\", \"Article_$counter.html\", \"post-$counter\")'><div class=\"link\" id=\"article-$counter\">⟿ &nbsp; Entry 0$counter</div></a>
							<sup class=\"caption\">(«$title.»)</sup>
						</div>
						<hr class=\"article_line\"> </hr>
					</div>" >> archive.html
		echo "				</div>
			</div>
		</aside>
	</body>
</html>" >> archive.html
		mv archive.html pages/archive/
	}
fi