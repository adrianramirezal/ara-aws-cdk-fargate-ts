#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkFargateTsStack } from '../lib/cdk-fargate-ts-stack';

const app = new cdk.App();
new CdkFargateTsStack(app, 'CdkFargateTsStack', {
});