# UI for Dynamic Memory Networks

Fake server documentation can be found [here](server/README.md).

## Development

Install npm, bower and gulp if you don't have them. After install all dependencies.

```bash
$ npm install
$ bower install
```

First, you need to seed DB for the fake API server and run it.

```bash
$ node server/seed-db > server/db.json
$ node server
```

After yo can serve your files. Files will be served under  [http://localhost:3000](http://localhost:3000).

```bash
gulp serve
```

## Build

To build your UI files run:

```bash
$ gulp build
```

Built files will be located at /dist, you can serve them using your favorite static server. 
If you want to serve them using fake server you can run:

```bash
$ node server
```

And navigate to [http://localhost:3003](http://localhost:3003).

