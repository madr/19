# se19

The site https://madr.se, a swedish personal website.

Personal blog, published in Plain Old Semantic HTML and vanilla CSS.

The pages are created from Markdown using [Metalsmith][1].

## Build site

The site can now be visited by opening `docs/index.html` in your
favorite browser.

### Local container image

Use Buildah or docker:

    buildah build --net host .
    docker build .

[1]: https://metalsmith.io/
