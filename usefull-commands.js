/**
 * delete ingress-nginx-admission:
 * kubectl delete -A ValidatingWebhookConfiguration ingress-nginx-admission
 * 
 * 
 * 
 * port-forward to test the NATS server
 * kubectl port-forward <nats pod name> 4222:4222
 * 
 * 
 * ingress-nginx mandatory command:
 * kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.0.0/deploy/static/provider/cloud/deploy.yaml
 */