
build:
	node index.js

node_modules: package.json
	npm install

serve:
	(cd doc && python3 -m 'http.server' 666)

brutal-legend:
	(cd ../practical-redux && npm run build)
	mkdir doc/bl
	cp ../practical-redux/index.html doc/bl/index.html
	cp ../practical-redux/bundle.js doc/bl/bundle.js
	cp -r ../practical-redux/assets doc/bl/assets

.PHONY: brutal-legend build serve
