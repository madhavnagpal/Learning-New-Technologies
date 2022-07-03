git checkout --recurse-submodules -- .
git submodule update –remote
git submodule update --init --recursive
git clone --recursive <url>

// updating all submodules

git submodule foreach git pull origin master

// alter updating submodules

# Get the submodule initially

git submodule add ssh://bla submodule_dir
git submodule init

# Time passes, submodule upstream is updated

# and you now want to update

# Change to the submodule directory

cd submodule_dir

# Checkout desired branch

git checkout master

# Update

git pull

# Get back to your project root

cd ..

# Now the submodules are in the state you want, so

git commit -am "Pulled down update to submodule_dir"

Commands

// To remove branches that are deleted on dev ( or merged ) from local.
git fetch -p && for branch in $(git branch -vv | grep ': gone]' | awk '{print $1}'); do git branch -D $branch; done

git reset --hard origin/<branch_name>

System limit for number of file watchers reached

# insert the new value into the system config

echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

Killing port

sudo kill -9 sudo lsof -t -i:9001

// lerna publish
npx lerna publish --force-publish

npx lerna link --force-local
