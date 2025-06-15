variable "aws_region" {
  default = "us-east-1"
}
variable "cluster_name" {
  default = "enterprise-k8s"
}
variable "vpc_id" {}
variable "subnets" {
  type = list(string)
}