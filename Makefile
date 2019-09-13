build:
	node index.js

brutal:
	(cd ../brutal-legend && npm run build)
	mkdir -p docs/bl/json
	cp ../brutal-legend/index.html docs/bl/index.html
	cp ../brutal-legend/bundle.js docs/bl/bundle.js
	cp -r ../brutal-legend/assets docs/bl/assets
	cp -r ../brutal-legend/json/albums.json docs/bl/json/albums.json 

node_modules: package.json
	npm install

serve:
	(cd doc && python3 -m 'http.server' 666)

.PHONY: brutal build serve
