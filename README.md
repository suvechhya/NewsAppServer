# NewsAppServer
This is a simple HTTP Server created using Nodejs and ExpressJs. The server does not have any database or datastore but utilizes the NewsAPI to fetch and serve data.
To run the application first run command 
# npm i
# npm run start
This command starts the application in a local port.

# Hosted App
This app is hosted in the url: https://newsappserver.herokuapp.com/

# API Usage
There are two APIs in this server.
1. Initial Search: This API does not take any parameters and returns the headlines from UK.
To call this API: https://newsappserver.herokuapp.com/api/search/initial OR {{Your URL}}/api/search/initial for locally running server.

2. Search by Keyword and Page: This API returns the news for a given keyword and returns only the specified page of it.
To call this API: https://newsappserver.herokuapp.com/api/search?keyword=Maradona&page=1 OR {{Your URL}}/api/search?keyword=Maradona&page=1 for locally running server.
