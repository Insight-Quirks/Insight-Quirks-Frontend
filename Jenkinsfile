node () 
    {
        stage ('Clone Code') {
              
              echo "Cloning the code"
              git credentialsId: 'githubLogin', url: 'https://github.com/Insight-Quirks/Insight-Quirks-Frontend.git'
              }
              
        stage ('Docker Compose Down & Up') {
          
          echo "Setting up the site & Deploying."
          sh "sudo docker compose down"
          sh "docker compose build --no-cache"
          sh "sudo docker compose up -d"
          }

      }