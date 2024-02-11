docker buildx build --no-cache --platform linux/amd64,linux/arm64 -t realmocean/celmino:1.0.49 --push .

# docker buildx create --use