# [Open Graph Image as a Service][production link]

[![CI Status][ci badge]][ci link]
[![MIT License][license badge]](LICENSE)

<p align="center" >
<img alt="demo image" height="200" src="https://og-image.ciffelia.com/api/gen?theme=light&fontFamily=%22Roboto+Mono%22%2C+%22Noto+Sans+JP%22%2C+monospace&fontSize=60px&text=Hello%2C+world%21&imageSrc=https%3A%2F%2Ficon.ciffelia.com%2F%3Frounded%3Dtrue%26format%3Dwebp&imageSrc=https%3A%2F%2Fgithub.com%2Fremojansen%2Flogo.ts%2Fraw%2Fmaster%2Fts.svg&imageSize=180px" />
</p>

Serverless service that generates dynamic Open Graph images that you can embed in your `<meta>` tags.

This repository was forked from [vercel/og-image][vercel original]. I rewrote the entire application in Next.js, because the original version uses very experimental frameworks which are not actively maintained.

## Features

- **Instant Preview**: previews are rendered in less than 20ms on your browser.
- **No Vendor Lock-in**: you don't necessarily have to host this app on Vercel.

[production link]: https://og-image.ciffelia.com
[ci badge]: https://github.com/ciffelia/og-image/workflows/CI/badge.svg?branch=main
[ci link]: https://github.com/ciffelia/og-image/actions?query=workflow%3ACI+branch%3Amain
[license badge]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat
[vercel original]: https://github.com/vercel/og-image
