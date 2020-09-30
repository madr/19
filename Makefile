build:
	node index.js
	(cd ../brutal-legend && npm run build)
	mkdir -p pub/bl/json
	cp -r ../brutal-legend/docs/* pub/bl
	
.PHONY: build
