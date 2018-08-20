## Start node server
#### (Optoin 1). Run app from console
1.  Build
```
npm install
npm run build
```

2.  Run

> npm run start

#### (Optoin 2). Run app using Docker

1.  Build a Docker image
```
docker build -f Dockerfile -t react-ssr-express-example:latest .
```

2.  Run
```
docker run -it -p 3000:3000 react-ssr-express-example:latest
```

#### (Option 3). Run app from Visual Studio Code
1. Open your local repository with Visual Studio Code
2. Select **Debug** -> **Start Debugging**
