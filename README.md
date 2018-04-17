# md2pdf

This tool aims to provide an easy, straightforward and repeatable way of generating PDFs from markdown files. If you ever experience weird and painful process like: write your markdown in your favourite editor, then paste it in an online editor to then paste rendered text into a Google Doc, to finally export it into PDF, this tool has been made for you :-)

## How to use?

Take a look at [examples/](examples/) to see a dummy markdown document and how it looks like when converted into PDF.

```bash
# Convert example.md into example.pdf
md2pdf --in example.md --out example.pdf --title "Terroir Corp LLC | Security Audit"
# Start a HTTP server to debug MD to HTML conversion (e.g. to debug missing images or CSS glitches)
md2pdf --debug --in example.md
```

Arguments:

* `--in` *(mandatory)*: Path of the input markdown file
* `--out` *(mandatory, unless `--debug` is provided)*: Path of the output PDF file
* `--debug` *(not mandatory)*: Start a HTTP server to debug converted HTML, rather than to convert input into PDF file.
* `--title` *(not mandatory)*: Used in the header of each page, hence nothing will appear if not provided.

## How does it work?

To convert Markdown into PDF, `md2pdf` follow three steps:

1. Convert Markdown into HTML, with [remarkable](https://github.com/jonschlinkert/remarkable),
2. Serve the HTML file, and static resources with [expressjs](https://expressjs.com),
3. Convert HTML into PDF, with [puppeteer](https://github.com/GoogleChrome/puppeteer).

To provide nice PDF, generated HTML is wrapped with a default template that includes a stylesheet with some of [primer](https://github.com/primer/primer) components, which is Github "design system". Thus, your PDFs should look like pretty much the same as your Markdown files on Github.

Chrome in headless mode disallow use of `file://` URLs, thus static assets like the stylesheet mentioned above are served by a HTTP server. Any other file or directory in the same basedir as your markdown file, will be accessible through the HTTP server.

## TODO

* [ ] Add parameters to have more control over remarkable/puppeteer
* [ ] Support for custom templates (markdown and html)
* [ ] Use a better syntax to delimit pages
* [ ] Look for h1/h2 in the document to determine document title when it's not provided
* [ ] Add pages to ToC
* [ ] Add automatic document versioning
* [ ] Support for multi docs conversion
* [ ] Use yargs to build proper usage/help message (https://github.com/yargs/yargs/blob/master/example/help.js)
