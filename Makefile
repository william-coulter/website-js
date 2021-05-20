.PHONY : install
install:
	npm install

.PHONY : start
start: install
	npm run start
