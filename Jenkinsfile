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

        // stage('Docker Build') {
        //     steps {
        //         bat 'docker build -t angular-ui .'
        //     }
        // }
    }
}
