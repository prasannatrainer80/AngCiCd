pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/prasannatrainer80/AngCiCd'
            }
        }

        stage('Build Angular') {
            steps {
                dir('angular') {
                    bat 'npm ci'
                    bat 'npm run build -- --configuration production'
                }
            }
        }
    }

    post {
        success {
            echo 'Build successful – starting Angular app'

            dir('angular') {
                bat 'npm start'
            }
        }

        failure {
            echo 'Build failed – app not started'
        }
    }
}
