<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>INFO2180 - Lab 4</title>
    <link rel="stylesheet" type="text/css" href="styles.css"/>
    <script src="app.js"></script>
  </head>

  <body>
        <header>
            <div class="title">
                <h1>AVENGERS CHARACTER SEARCH</h1>
            </div>
        </header>
        
        <main>
            <div>
                <h3>Search by Full Name or Alias</h3>
                <form>
                    <div>
                        <input id="entry" type="text" name="superhero" placeholder="e.g Captain America or Steve Rogers">
                        <button type="submit" onclick="addState()" class="btn">Search</button>
                    </div>
                </form>      

                <h2>RESULT</h2> 
                <hr>
                <div class="result">
                    <h3 class="realname"></h3>
                    <h4 class="alias"></h4>
                    <p class="biography"></p>                    
                </div>
            </div>
        </main>
        
        <footer>
            <div class="last">
                <p>Copyright &copy; 2020, Delano Senior</p>
            </div>
        </footer>

  </body>
</html>