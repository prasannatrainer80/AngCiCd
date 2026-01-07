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
        echo 'Build successful – deploying Angular using Docker'

        bat 'docker build -t angular-ui-ci .'
        bat 'docker stop angular-ui-ci || exit 0'
        bat 'docker rm angular-ui-ci || exit 0'
        bat 'docker run -d -p 9111:80 --name angular-ui-ci angular-ui-ci'
    }

    failure {
        echo 'Build failed – deployment skipped'
    }
}

}
