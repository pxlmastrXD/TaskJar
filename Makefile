build:
	@npx tsc index.ts

run:
	@node index.js
	@rm index.js

clean:
	@rm *.js */*.js

dev: build run clean


exec:
	@npx tsc exec.ts
	@node exec.js
