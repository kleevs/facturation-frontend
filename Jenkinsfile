pipeline {
  agent {
    docker {
      image 'ubuntu'
    }

  }
  stages {
    stage('npm run build') {
      steps {
        sh '''apt update;
apt install -y webpack; '''
        sh 'webpack --config webpack.config.js --env.out=/bin --env.production'
      }
    }

  }
}