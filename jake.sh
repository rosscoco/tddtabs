
[ ! -f node_modules/.bin/jake ] && echo "Rebuilding npm modules" && npm rebuild

node_modules/.bin/jake $*