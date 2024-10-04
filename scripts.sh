kubectl create -f postgres-sts.yaml


kubectl get statefulset 
kubectl get pod 
kubectl logs <nome do pod>
kubectl logs heroes-postgres-0 

kubectl describe sts heroes-postgres

kubectl create -f postgres-svs.yaml

kubectl get svc

kubectl describe service heroes-postgres-svc

kubectl create -f heroes-api.deployment.yaml 

kubectl describe deployment heroes-api