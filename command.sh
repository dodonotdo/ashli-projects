helm install vault hashicorp/vault --set "injector.enabled=false" \
  --set "csi.enabled=true"

helm repo add hashicorp https://helm.releases.hashicorp.com


ubuntu@tiscout-master:~$ kubectl exec --stdin=true --tty=true vault-0 -- vault operator init
Unseal Key 1: 4QKDNkJ/B9Hj0YGMqqVs4QZmXppnAB471JQFNiZjrnM6
Unseal Key 2: GN4/gVtdSykICGajigkhBwXOzwfY9KicsnDJj1R1R0/z
Unseal Key 3: SkCifqn3Ix6fwGUgs8iGRQ0O2QLI3CR6ZogX56i2OLaW
Unseal Key 4: u+q/z4RLBCd8BVLdaeBU24p3BobIwMrF3ehee69NDtmj
Unseal Key 5: IV1GCbbNt4H3weemYJTj9cBsbyEqQ7ftENjwpmIWotGE

Initial Root Token: s.L1b2Tt5UC4irhZZ3sBnB7d7p

kubectl exec --stdin=true --tty=true vault-0 -- vault operator unseal


ubuntu@tiscout-master:~/vault$ helm repo add secrets-store-csi-driver https://kubernetes-sigs.github.io/secrets-store-csi-driver/charts
"secrets-store-csi-driver" has been added to your repositories
ubuntu@tiscout-master:~/vault$ helm install csi-driver secrets-store-csi-driver/secrets-store-csi-driver
