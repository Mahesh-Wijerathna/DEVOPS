
pipeline {
    agent any

    stages {
        stage('SCM checkout') {
            steps {
                retry(3) {
                    checkout scmGit(
                        branches: [[name: '*/backend']], 
                        extensions: [], 
                        userRemoteConfigs: [[url: 'https://github.com/Mahesh-Wijerathna/DEVOPS.git']]
                    )
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t maheshwijerathna/backend-app-image .'
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    // Stop and remove any existing container with the same name
                    sh 'docker stop maheshwijerathna-backend-app-image-container || true'
                    sh 'docker rm maheshwijerathna-backend-app-image-container || true'
                    // Run the new container
                    sh 'docker run -d -p 8070:8070 --name maheshwijerathna-backend-app-image-container maheshwijerathna/backend-app-image'
                }
            }
        }
        stage('Show Running Containers') {
            steps {
                sh 'docker ps'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'docker_password', variable: 'Dockerhub')]) {
                    script {
                        sh "docker login -u maheshwijerathna -p ${Dockerhub}"
                    }
                }
            }
        }
        stage('Push Image') {
            steps {
                script {
                    retry(3) {
                        echo 'Pushing Docker image to Docker Hub...'
                        sh 'docker push maheshwijerathna/backend-app-image'
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
