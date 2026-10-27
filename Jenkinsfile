pipeline {
    agent any

    stages {
        stage('setup') {
            steps {
                bat 'npm install'
            }
        }
        stage('teste') {
            steps {
                bat 'npm run cy:run'
            }
        }
        stage('Deploy') {
           steps {
                 publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, icon: '', keepAll: false, reportDir: 'mochawesome-report', reportFiles: 'mochawesome.html', reportName: 'EBAC Report', reportTitles: '', useWrapperFileDirectly: true])
           }
        }
    }
}