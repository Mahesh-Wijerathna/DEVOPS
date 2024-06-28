
pipeline {
    agent any

    stages {
        stage('SCM checkout') {
            steps {
                retry(3) {
                    checkout scmGit(
                        branches: [[name: '*/main']], 
                        extensions: [], 
                        userRemoteConfigs: [[url: 'https://github.com/Mahesh-Wijerathna/DEVOPS.git']]
                    )
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t maheshwijerathna/frontend-app-image .'
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    // Stop and remove any existing container with the same name
                    sh 'docker stop maheshwijerathna-frontend-app-image-container || true'
                    sh 'docker rm maheshwijerathna-frontend-app-image-container || true'
                    // Run the new container
                    sh 'docker run -d -p 3001:3000 --name maheshwijerathna-frontend-app-image-container maheshwijerathna/frontend-app-image'
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
                        sh 'docker push maheshwijerathna/frontend-app-image'
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
