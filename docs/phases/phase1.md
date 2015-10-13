# Phase 1: User Authentication, Note Model and JSON API

## Rails
### Models
* User
* Question

### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* Api::QuestionsController (create, destroy, index, show, update)

### Views
* users/new.html.erb
* session/new.html.erb
* static_pages/root.html.erb 
* questions/index.json.jbuilder
* questions/show.json.jbuilder

## Flux
### Views (React Components)
* app.js.jsx 
* app_index.js.jsx (index route) 
* feed.js.jsx


### Stores
* question_store.js

### Actions


### ApiUtil

## Gems/Libraries
* BCrypt