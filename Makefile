
build:
	node index.js
	(cd ../brutal-legend && npm run build)
	mkdir docs/bl
	cp ../brutal-legend/index.html docs/bl/index.html
	cp ../brutal-legend/bundle.js docs/bl/bundle.js
	cp -r ../brutal-legend/assets docs/bl/assets

node_modules: package.json
	npm install

serve:
	(cd doc && python3 -m 'http.server' 666)

.PHONY: build serve
