hello:
	@echo "Welcome to Freedom"
	@echo
	@echo "Available tasks:"
	@echo "* css - compiles freedom.less to freedom.css"

css:
	lessc src/freedom.less > builds/freedom.css
