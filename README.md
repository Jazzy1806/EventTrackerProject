# EventTrackerProject

## Description
This REST API uses Spring Data JPA to manage a project database. Using the routes provided, the user can search for a single project or the entire list, as well as create, edit, and delete projects from the database. The current scope is limited to a single table, but can easily be expanded for additional functionality. 


## Technology Used
* Repositories	
* Spring Boot	
* Spring Data JPA	
* RESTful services	
* Postman	
* Java	
* MySQL	
* JUnit
* Gradle	
* MAMP	


### Routes

Access these routes through: 204.236.144.233:8080/Projects/

|HTTP Method	|Route	|Functionality	|  
|---------------|-------|---------------|
|GET  	|/api/projects	|Returns a list of all current projects	|
|GET  	|/api/projects/{projectId}	|Returns a single project by ID	|
|POST		|/api/projects	|Create a new project	|
|PUT		|/api/projects/{projectId}	|Edit a project by ID	|
|DELETE		|/api/projects/{projectId}	|Delete a project by ID	|       


## Lessons Learned
While Spring Data JPA simplifies and streamlines CRUD functions, you have to put a bit more thought into the design of the appication to ensure proper mappings that avoid stack overflow issues and produce accurate HTTP status codes to the end-user. With a bit more practice, this will be an extremely valuable tool.