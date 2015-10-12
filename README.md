# Answer.

[Heroku link][heroku] 

[heroku]: https://myquora.herokuapp.com/

## Minimum Viable Product

Answer. is a web application inspired by Quora built using Ruby on Rails and React.js. Answer. allows user to: 

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, edit, delete Questions
- [ ] Answer Questions with a logged in user, displaying name of user
- [ ] Tag questions with multiple tags and search questions by tag
- [ ] Upvote questions and sort by most upvotes 

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Question Model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for Questions.

[Details][phase-one]

### Phase 2: Flux Architecture and Note CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Question store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Question `Index`, `IndexItem` and `Form`. At the end of Phase 2,
Questions can be created, read, edited and destroyed in the browser. Questions should save to the database when the form loses focus or is left idle after editing.
Lastly, while constructing the views I will start using basic bootstrap for
styling.

[Details][phase-two]

### Phase 3: Tags (2 days)

Phase 3 adds organization to the Questions. Questions have Tags. The default index page will contain all Questions which have Tags that the User has selected. Questions can also now be tagged with multiple Tags. When a user clicks on a certain Tag, only questions which contain that Tag will be displayed. Will also add upvotes and allow users to sort by upvotes. 

[Details][phase-three]

### Phase 4: Profiles (1 day)

Allow users to upload pictures to profiles. Profiles display user images, which will be displayed on all Answers.

[Details][phase-four]


### Phase 5: GPS implementation (1.5 days) 

Use google Maps API to display Question locations to default index page. 

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

Bootstrap will have been used to keep things organized up until now, but in
Phase 6 I will add styling flourishes and make modals out of some elements (like
the NotebookForm).

[Details][phase-six]

### Bonus Features (TBD)
- [ ] Prettify transitions
- [ ] Use javascript library for cleaner tag selection
- [ ] Changelogs for Notes
- [ ] Pagination / infinite scroll for Questions Index

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
