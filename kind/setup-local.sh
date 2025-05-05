#!/bin/bash

# 1. Construim imaginea Docker
docker build -t medicline:latest .

# 2. Creăm clusterul Kind
kind create cluster --config kind-cluster-config.yaml

# 3. Adăugăm imaginea în clusterul Kind
kind load docker-image medicline:latest

# 4. Aplicăm manifestele Kubernetes
kubectl apply -f deployment.yaml

# 5. Verificăm statusul resurselor
kubectl get all