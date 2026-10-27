pipeline {
    agent any

    stages {
        stage('setup') {
            steps {
                sh 'npm install'
            }
        }
        stage('teste') {
            steps {
                sh 'npm run cy:run'
            }
        }
        stage('Deploy') {
           steps {
                 publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, icon: '', keepAll: false, reportDir: 'mochawesome-report', reportFiles: 'mochawesome.html', reportName: 'EBAC Report', reportTitles: '', useWrapperFileDirectly: true])
           }
        }
    }
}