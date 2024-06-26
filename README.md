# se19

The site https://madr.se, a swedish personal website.

Personal blog, published in Plain Old Semantic HTML and vanilla CSS.

The pages are created from Markdown using [Metalsmith][1].

## Build site

3 directories are needed to build the site. These are
mounted as volumes when the container image runs.

- `src`: source directory for Metalsmith.
- `pub`: destination directory for Metalsmith.
- `assets`: images, CSS files, fonts and other resources that should be served statically.

Make sure these directories exists. In the below example, the paths are as-is from my portable machine.

    podman run \
    -ti \
    -v ./dist:/app/pub \
    -v /path/to/src:/app/src \
    -v /path/to/assets:/app/assets \
    ghcr.io/madr/19:main

The site can now be visited by opening `dist/index.html` in your favorite browser.

### Local container image

Use Podman to utilize cache of the build steps:

    podman build .

Use the above `podman run` example to build site by replacing `ghcr.io/madr/19:main` at the end with the container-id provided by the build command.

[1]: https://metalsmith.io/
