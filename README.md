# Simple Node Service

A Simple Nodejs Service to Demonstrate CI/CD in GCP used at CCD HYD.

![Tests](https://github.com/neilghosh/simple-node-service/actions/workflows/node.js.yml/badge.svg)

### Test
```
node test
```
### Run
```
node start
```

## Cloud SQL Setup 

### Create a Cluster 
```
gcloud container clusters create-auto simple-crud-app --asia-south1
```
### Create a SQL Instance
```
gcloud sql instances create tiny-pg-db \
--database-version=POSTGRES_12 \
--cpu=1 \
--memory=3840MB \
--region=us-central

https://cloud.google.com/sql/docs/postgres/connect-instance-kubernetes#expandable-2
```

### Create a secret
```
kubectl create secret generic tiny-pg-db-secret \
  --from-literal=database=postgres \
  --from-literal=username=postgres \
  --from-literal=password=test1234
```

### Workload entity
```
gcloud iam service-accounts create gke-quickstart-service-account   --display-name="GKE Quickstart Service Account"
gcloud projects add-iam-policy-binding demoneil   --member="serviceAccount:gke-quickstart-service-account@demoneil.iam.gserviceaccount.com"   --role="roles/cloudsql.client"
kubectl annotate serviceaccount   simple-crud-app-ksa    iam.gke.io/gcp-service-account=gke-quickstart-service-account@demoneil.iam.gserviceaccount.com
gcloud iam service-accounts add-iam-policy-binding   --role="roles/iam.workloadIdentityUser"   --member="serviceAccount:demoneil.svc.id.goog[default/simple-crud-app-ksa]"   gke-quickstart-service-account@demoneil.iam.gserviceaccount.com
```