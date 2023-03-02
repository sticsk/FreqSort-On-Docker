## Run on Docker

Before building the image and running the container, make sure to know your CPU architecture (amd64 for Intel/AMD, arm64 for Mac M1)
There are two ways to make this web application running :

**1. Directly running the container from Docker Hub**

https://hub.docker.com/r/sticsk/freqsort

Simply run the following : 

`docker run --name freqsort -p 3000:3000 sticsk/freqsort:amd64` for **amd64** architecture

or

`docker run --name freqsort -p 3000:3000 sticsk/freqsort:arm64` for **arm64** architecture


**2. Build the image**

Like I said in the first paragraph, make sure to know your CPU architecture, beacuse building the image requires `--platform` flag.

**For amd64**

*To build :*
```bash
docker build --platform=linux/amd64 -t freqsort:amd64 .
```
*To run :*
```bash
docker run --name freqsort -p 3000:3000 freqsort
```

**For arm64**

*To build :*
```bash
docker build --platform=linux/arm64 -t freqsort:arm64 .
```
*To run :*
```bash
docker run --name freqsort -p 3000:3000 freqsort
```

**In order to see the web application open any browser and access `http://localhost:3000` or `http://host-ip:3000`**


