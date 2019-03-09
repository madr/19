
build:
	node index.js

node_modules: package.json
	npm install

serve:
	(cd doc && python3 -m 'http.server' 666)

brutal-legend:
	(cd ../brutal-legend && npm run build)
	mkdir doc/bl
	cp ../brutal-legend/index.html doc/bl/index.html
	cp ../brutal-legend/bundle.js doc/bl/bundle.js
	cp -r ../brutal-legend/assets doc/bl/assets

.PHONY: brutal-legend build serve
