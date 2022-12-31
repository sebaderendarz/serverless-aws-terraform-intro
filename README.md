# Serverless AWS Terraform Intro

Simple project to play with serverless framework and Terraform

## How to run

1. Create aws account
2. Install aws cli
3. Install serverless framework
4. Install terraform
5. Configure aws cli by running `aws configure`
6. Pull repo
7. Go to `infrastructure` folder
8. Run `terraform init`
9. Run `terraform plan`
10. Run `terraform apply`
11. Go to `app` folder
12. Run `serverless deploy --verbose`
13. Play with the app, hit endpoints etc.
14. Run `serverless remove` to tear down AWS serverless app resources
15. Go to `infrastructure` folder
16. Run `terraform destroy` to tear down AWS infrastructure resources
