
build:
	node index.js

node_modules: package.json
	npm install

serve:
	(cd doc && python3 -m 'http.server' 666)

.PHONY: build serve
