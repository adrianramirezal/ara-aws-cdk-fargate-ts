# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

# Docker from https://docs.aws.amazon.com/AmazonECS/latest/userguide/create-container-image.html
* `docker build . -f Dockerfile -t hello-world` to build de image
* `docker images --filter reference=hello-world` to list images and see de image builded
* `docker run -it -p 80:80 hello-world` to run de images, Go to http://localhost/
* `docker tag hello-world <AWS_ACCOUNT_ID>.dkr.ecr.<REGION>.amazonaws.com/hello-repository` To tag the hello-world image
* `aws ecr get-login-password --profile capp-dev | docker login --username AWS --password-stdin <AWS_ACCOUNT_ID>.dkr.ecr.<REGION>.amazonaws.com` Output: Login Succeeded
* `docker push <AWS_ACCOUNT_ID>.dkr.ecr.<REGION>.amazonaws.com/hello-repository` To Push the image to Amazon ECR 

# Creating an AWS Fargate service using the AWS CDK https://docs.aws.amazon.com/cdk/v2/guide/ecs_example.html