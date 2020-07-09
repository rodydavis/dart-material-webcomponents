export PATH="$PATH":"$HOME/.pub-cache/bin"
cd web && rollup -c & webdev build --output web:docs
rm -rf docs/node_modules