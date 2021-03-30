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
      junit './*.xml'
    }
  }
}
