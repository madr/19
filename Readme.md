# se19

The site https://madr.se, a swedish personal website.

Personal blog, published in Plain Old Semantic HTML and vanilla CSS.
No JavaScript.

The pages are created from Markdown using [Metalsmith][1].

## Build site

The site itself can be built using `npm index.js`. However, some
project apps outside of this repository needs to be imported since
they are published on the same domain.

To build this pages, and import external stuffs, run he below command:

    $ make build

The site can now be visited by opening `docs/index.html` in your
favorite browser.

[1]: https://metalsmith.io/
