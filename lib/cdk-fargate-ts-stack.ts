import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ecs_patterns from "aws-cdk-lib/aws-ecs-patterns";
import {DefaultInstanceTenancy} from "aws-cdk-lib/aws-ec2";

export class CdkFargateTsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
  
    const vpc = new ec2.Vpc(this, 'CAPP-VPC', {
      vpcName: 'CAPP-VPC-Test',
      defaultInstanceTenancy: DefaultInstanceTenancy.DEFAULT,
      cidr: "10.16.0.0/16",
      enableDnsHostnames: true,
      enableDnsSupport: true,
      maxAzs: 2,
      natGateways: 0,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'WEB',
          subnetType: ec2.SubnetType.PUBLIC,
          mapPublicIpOnLaunch: true
        }
      ]
    });
  
    const cluster = new ecs.Cluster(this, "MyCluster", {
      vpc: vpc,
      clusterName: 'Hello-World'
    });
    
    // Create a load-balanced Fargate service and make it public
    const fargate = new ecs_patterns.ApplicationLoadBalancedFargateService(this, "MyFargateService", {
      cluster: cluster,
      cpu: 512, // Default is 256
      desiredCount: 2, // Default is 1
      taskImageOptions: { image: ecs.ContainerImage.fromRegistry("hello-repository") },
      memoryLimitMiB: 1024, // Default is 512
      publicLoadBalancer: true, // Default is true
      serviceName: 'SvcHelloWorld',
      taskSubnets: {
        subnets: vpc.publicSubnets
      }
    });
  }
}
