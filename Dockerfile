FROM node:20-alpine
RUN apk add --no-cache bash
RUN apk add --no-cache jq

COPY . /assessment_project

WORKDIR /assessment_project

ENTRYPOINT ["/bin/bash"]

RUN npm i \
    && npx hardhat compile

