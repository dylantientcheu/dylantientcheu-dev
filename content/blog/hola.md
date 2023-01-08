---
title: 'Completely contrary to teachings'
description: 'Hlapd lorrarr e mi. Donec tempus sit amet risus et viverra. Nulla facilisi. Ut quis posuere nisl.'
image: 'https://images.unsplash.com/photo-1542731247-7b3b0f7b5f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
date: '12-08-2023'
tag: 'Opinions'
---

# Querying, searching and finding with Context

---

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```

Look at the [Content documentation](https://content-v2.nuxtjs.org/) to learn more.
