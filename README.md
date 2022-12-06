# nginx-webbapp

This is just an application to host a html page in nginx.

Run this to build your image

```bash
docker build -t nginx-webbapp:1.0 .
```

To run the app locally

```bash
docker run --name demo_webapp -d -p 8080:80 nginx-webbapp:1.0
```

To remove the container

```bash
docker stop demo_webapp
docker rm demo_webapp
```
