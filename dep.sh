git add .

git commit -m "Now deploying the application to firebase and expo"

git push

echo "===================== Pushed to GitHub ======================="

expo publish


echo "===================== Published to Expo ======================="

expo build:web


echo "===================== Build Successful ======================="

firebase deploy

echo "===================== Successfully deployed to firebase ======================="