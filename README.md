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

Next thing is to push the image to [hub.docker.com](https://hub.docker.com)

```bash
docker tag nginx-webbapp:1.0 docker.io/crackitty/nginx-webbapp:1.0
```

Note: If you're using an M1 Mac - be careful, you need to build your image for
the following architecture

```bash
docker buildx build --platform linux/amd64 -t nginx-webbapp:1.0 .
```

Next thing is to deploy our container in a Pod in Kubernetes. So you will need to
connect to a Kubernetes cluster (wo, whatever one you have access to)

```bash
kubectl apply -f k8s/pod.yaml
```

This should run the pod on a worker node on your cluster.

You can check the progress using

```bash
kubectl get pods
# or
kubectl describe pod my-pod
# or
kubectl logs my-pod
```
