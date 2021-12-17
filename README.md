# [Open Graph Image as a Service][production link]

[![CI Status][ci badge]][ci link]
[![MIT License][license badge]](LICENSE)

Serverless service that generates dynamic Open Graph images that you can embed in your `<meta>` tags.

This repository was forked from [vercel/og-image][vercel original]. I rewrote the entire application in Next.js, because the original version uses very experimental frameworks which are not actively maintained.

## Features

- **Instant Preview**: previews are rendered in less than 20ms on your browser.
- **No vendor lock-in**: you don't necessarily have to host this app on Vercel.

[production link]: https://og-image.ciffelia.com
[ci badge]: https://github.com/ciffelia/og-image/workflows/CI/badge.svg?branch=main
[ci link]: https://github.com/ciffelia/og-image/actions?query=workflow%3ACI+branch%3Amain
[license badge]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat
[vercel original]: https://github.com/vercel/og-image
