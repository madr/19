build:
	node index.js
	(cd ../brutal-legend && npm run build)
	mkdir pub/bl
	cp -r ../brutal-legend/docs/* pub/bl

release:
	rsync -alPvz ./pub/* madr@aginor:/srv/madr.se

.PHONY: build release
