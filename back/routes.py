from views import test, new_man, hangman

def setup_routes(app):
    app.router.add_route("GET", "/test", test)
    app.router.add_route("GET", "/newman", new_man)
    app.router.add_route("POST", "/hangman", hangman)