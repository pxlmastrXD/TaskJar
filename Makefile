build:
	@npx tsc index.ts

run:
	@node index.js
	@rm index.js

dev: build run

clean:
	@rm *.js */*.js