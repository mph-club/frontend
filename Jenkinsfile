pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'make docker-build'
            }
        }
        stage('Tag') {
            when {
                branch 'prod'
            }
            steps {
                sh 'make docker-tag'
            }
        }
        stage('Push') {
            when {
                branch 'prod'
            }
            steps {
                sh 'make docker-push'
            }
        }
        stage('Deploy') {
            when {
                branch 'prod'
            }
            steps {
                sh 'make docker-deploy'
            }
        }
    }
    post {
        always {
            sh 'make docker-clean'
            deleteDir()
        }
        success {
            slackSend color: 'good',
                      message: "The pipeline ${currentBuild.fullDisplayName} completed successfully."
        }
        failure {
            slackSend color: 'danger',
                      message: "The pipeline ${currentBuild.fullDisplayName} failed. (${currentBuild.absoluteUrl})"
        }
    }
}
