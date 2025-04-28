build:
	@npx tsc index.ts

run: build
	@node index.js
	@rm index.js