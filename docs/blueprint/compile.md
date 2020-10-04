# Use default layout
$ aglio -i ./blueprint/input.apib --theme-template default --theme-variables cyborg -o index.html 


# Use triple layout
$ aglio -i ./blueprint/input.apib --theme-template triple --theme-variables cyborg -o index.html


# Run a live preview server on http://localhost:3000/
$ aglio -i ./blueprint/input.apib --theme-template triple --theme-variables cyborg -o index.html -s

