build:
	podman run \
    --net host \
    -ti \
    --volume ./dist:/app/pub \
    --volume ../../Sync/Rahvin/madrse/src:/app/src \
    --volume ../../Sync/Rahvin/madrse/assets:/app/assets \
    ghcr.io/madr/19:main

.PHONY: build release
