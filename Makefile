build:
	node index.js
	cp pub/albums.json ../brutal-legend/static/albums.json
	(cd ../brutal-legend && npm run build)
	mkdir -p pub/bl/json
	cp -r ../brutal-legend/docs/* pub/bl
	
.PHONY: build
