build:
	podman run \
    --net host \
    -ti \
    --volume ./dist:/app/pub \
    --volume ../../Sync/Rahvin/madrse/src:/app/src \
    --volume ../../Sync/Rahvin/madrse/assets:/app/assets \
    ghcr.io/madr/19:main

release: build
	rsync -alPvz ./dist/* --exclude=".*" madr@aginor:/srv/madr.se

.PHONY: build release
