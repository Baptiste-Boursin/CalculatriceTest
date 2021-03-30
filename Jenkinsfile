pipeline{
  agent any
  stages{
    stage('Install dependencies'){
      steps{
        sh 'npm install'
      }
    }
    stage('Run test'){
      steps{
        sh 'npm test'
      }
    }
  }
  post{
    always{
      junit 'test-results.xml'
    }
  }
  publishHTML(target: [
    allowMissing: false,
    alwaysLinkToLastBuild: false,
    keepAll: true,
    reportDir: 'coverage',
    reportFiles: 'index.html',
    reportName: 'HTML Report',
    reportTitles: ''
  ])
}
