
kubectl apply -f ./k8s/nextjs/deployment-dev.yml
kubectl apply -f ./k8s/nextjs/deployment-uat.yml
kubectl apply -f ./k8s/nextjs/deployment-staging.yml
kubectl apply -f ./k8s/nextjs/deployment-deploy.yml
kubectl apply -f ./k8s/nextjs/service.yml

configMap ./k8s/nextjs/configmap.yml

kubectl apply -f k8s/postgres/development.yml
kubectl apply -f k8s/postgres/service.yml
