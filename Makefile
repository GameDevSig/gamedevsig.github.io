.PHONY: run host build_bulma build
run: build_bulma
	bundle exec jekyll serve --livereload --host localhost

run: build_bulma
	bundle exec jekyll serve --livereload --host 0.0.0.0

build_bulma:
	npx sass --quiet-deps --load-path=node_modules _sass/bulma.scss assets/css/bulma.css

build: build_bulma
	bundle exec jekyll build