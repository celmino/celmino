docker run -it --rm \
    --volume /var/run/docker.sock:/var/run/docker.sock \
    realmocean/celmino:1.0.23

    # docker stop $(docker ps -a -q)

    # docker rm $(docker ps -a -q)

    # docker rmi $(docker images | grep 'realmocean/realmocean')