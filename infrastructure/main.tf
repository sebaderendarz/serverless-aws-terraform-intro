terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.48"
    }
  }

  required_version = ">= 1.3.0"
}

provider "aws" {
  region  = "eu-central-1"
  shared_credentials_files = ["$HOME/.aws/credentials"]
}

resource "aws_dynamodb_table" "chat_messages" {
  name           = "ChatMessages"
  hash_key       = "Id"
  billing_mode   = "PAY_PER_REQUEST"

  attribute {
    name = "Id"
    type = "S"
  }
}
