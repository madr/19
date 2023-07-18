# se19

The site https://madr.se, a swedish personal website.

Personal blog, published in Plain Old Semantic HTML and vanilla CSS.

The pages are created from Markdown using [Metalsmith][1].

## Build site

    mkdir dist

    podman run \
    --net host -ti \
    --volume ./dist:/app/pub \
    --volume ../../Sync/Rahvin/madrse/src:/app/src \
    --volume ../../Sync/Rahvin/madrse/assets:/app/assets \
    c58c3fb29808

The site can now be visited by opening `docs/index.html` in your
favorite browser.

### Local container image

Use Buildah or docker:

    buildah build --net host .
    docker build .

[1]: https://metalsmith.io/
