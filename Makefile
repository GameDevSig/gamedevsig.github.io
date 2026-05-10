.PHONY: run build_bulma
run: build_bulma
	bundle exec jekyll serve --livereload

build_bulma:
	npx sass --quiet-deps --load-path=node_modules _sass/bulma.scss assets/css/bulma.css

build: build_bulma
	bundle exec jekyll build