# First, build your Next.js Docker image locally:

docker build -t nextjs-app:dev .

# Use a Local Kubernetes Cluster (like Minikube or kind)

# Testing with Minikube

Start Minikube:
`minikube start`
Point your terminal to use Minikube's Docker environment:
`eval $(minikube -p minikube docker-env)`
Build the Docker image in Minikube's Docker environment:
`docker build -t nextjs-app:dev .`
Now, Minikube can directly access this image.

# Deploy to Kubernetes

## After building the image, you can update your `deployment.yaml` to use the locally built image:

<!-- spec:
  containers:
    - name: nextjs
      image: nextjs-app:dev
      ports:
        - containerPort: 3000 -->
kubectl apply -f k8s/nextjs/deployment-dev.yaml

# Access the Application
minikube service nextjs-service --url


# Testing with kind

Create a kind cluster:

- kind create cluster
Build the image locally:

- docker build -t nextjs-app:dev .
Load the Docker image into kind:

- kind load docker-image nextjs-app:dev
Apply the Kubernetes configuration:

- kubectl apply -f k8s/nextjs/deployment-dev.yaml


# Verify the Deployment
kubectl get pods
kubectl logs <nextjs-pod-name>
