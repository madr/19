build:
	node index.js
	(cd ../brutal-legend && npm run build)
	mkdir -p docs/bl/json
	cp ../brutal-legend/index.html docs/bl/index.html
	cp ../brutal-legend/bundle.js docs/bl/bundle.js
	cp -r ../brutal-legend/assets docs/bl/assets
	cp -r ../brutal-legend/json/albums.json docs/bl/json/albums.json 

.PHONY: build
