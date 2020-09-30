build:
	node index.js
	cp -rn assets/img/covers ../brutal-legend/static
	cp -f pub/albums.json ../brutal-legend/static
	(cd ../brutal-legend && npm run build)
	rm -rf pub/bl
	cp -r ../brutal-legend/docs pub/bl

release: build
	rsync -alPvz ./pub/* --exclude=".*" madr@aginor:/srv/madr.se

.PHONY: build release
