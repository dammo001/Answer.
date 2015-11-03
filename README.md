# Answer.

[Live Link][answr] 
![answrlogo]


[answrlogo]: ./app/assets/images/answr.jpg 
[answr]: https://www.answr.xyz

## Description
Answer., built with React on Rails, is conceptually similar to [Quora](https://www.quora.com), but dramatically different in implementation. While Quora is a traditional site, Answer. is a single page app which leverages the user's hardware by frontloading the vast majority of content in order to deliver an improved user experience with minimal server load. 

## Technologies 
- Ruby on Rails Framework
- React.js
- JavaScirpt
- HTML
- CSS 

## The Code 
#### JBuilder
The most challenging aspect of creating this site was planning out the associations and controllers in such a way to deal with the high level of interconnectivity of the many pieces. I first realized the scope of this issue when dealing with comments. Comments needed to exist for both answers and questions, so I had to make them as a polymorphic association to be accessible to both. However, the site constantly needs to access attributes such as the comment's author's name, the comment's author's picture, and so forth. I used JBuilder to give my returned objects the power and flexibility to wrap all of my necessary assocations and logic into a single return object from the controllers. I realized that the only logical way to organize my site was through top down store->view changes. Since my Feed is based off of questions, that meant that every created comment needed to return a Question regardless of it was created for a Question or an Answer. The difficulty here was two fold. I had to figure out how to create my comments so that they always returned the correct Question, and I needed to figure out how to make my Comment controller return a differnet type of object. To do this, I wrote a custom route for my comments controller: 

 def create
  	@comment = Comment.new(comment_params)
  	@comment.user_id = current_user.id 
    type = comment_params[:commentable_type]
    id = comment_params[:commentable_id] 

    if (type == "Answer")
      @question = Answer.find(id).question
    else 
      @question = Question.find(id) 
    end

  	if @comment.save 
  		render template: "api/questions/show" 
  	else 
  		render json: @comment.errors.full_messages  
  	end

So my comments controller was able to determine if it was of Question or Answer type, then return the corresponding Question with the necessary associations from my JBuilder view. 

#### React Views 
A problem I dealt with that was surprisingly difficult was getting my React Tags view checkboxes to both be able to be passed their state as props, and to be able to update their parent components state as they are checked. To deal with this, I used the following logic:

TagsList: 
	
	toggle: function(tag){
		var key = tag;
		var tags = this.state.tags;
		tags[key] = !tags[key]; 
		this.setState({ tags: tags });
	},

As children are clicked, they change the state of the parent component. 

TagListItem = React.createClass({

	change: function(){ 
		this.props.toggle(this.props.tag);
	},	

	render: function(){

		var checked; 
		if (this.props.value){
			checked = "checked";
		} else { 
			checked = "" ;
		}

		return 	(
			<li className="tag-name-list tag-choose" id={checked} onClick={this.change} > 
				{this.props.tag}
				&nbsp; <span className="glyphicon glyphicon-tag" aria-hidden="true"></span>
			</li>
			); 
	}

})

As children are clicked, they both change their "checked" value to change in color, as well as changing the state of the parent by activating the "toggle" function which was passed to them as props. Initially, I gave the children a state as well, which resulted in an infinite feedback loop. The trick here was removing state within the children and passing the children a function as props to modify the state of the parent. 



## Implementation 
-----------------

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

### Phase 2: Flux Architecture and Question CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Question store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Question `Index`, `IndexItem` and `Form`. At the end of Phase 2,
Lastly, while constructing the views I will start using basic bootstrap for
styling.

[Details][phase-two]


### Phase 3: Answers and Comments(1.5 days) 

Phase 3 will allow users to add Answers to Questions, and Comments to Answers. 

[Details][phase-three] 

### Phase 4: Tags (1.5 days)

Phase 4 adds organization to the Questions. Questions have Tags. The default index page will contain all Questions which have Tags that the User has selected. Questions can also now be tagged with multiple Tags. When a user clicks on a certain Tag, only questions which contain that Tag will be displayed. Will also add upvotes and allow users to sort by upvotes. 

[Details][phase-four]

### Phase 5: Profiles (1 day)

Allow users to upload pictures to profiles. Profiles display user images, which will be displayed on all Answers.

[Details][phase-five]


### Phase 6: GPS and Search Bar implementation (1.5 days) 

Use google Maps API to display Question locations to default index page, as well as create Search bar. 

[Details][phase-six]

### Phase 7: Styling Cleanup and Seeding (1 day)

Bootstrap will have been used to keep things organized up until now, but in
Phase 7 I will add styling flourishes and make modals out of some elements (like
the QuestionForm and AnswerForm).

[Details][phase-seven]

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
