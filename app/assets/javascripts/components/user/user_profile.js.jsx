UserProfile = React.createClass({

	componentDidMount: function(){
	  		$('#upload_widget_opener').cloudinary_upload_widget(
		    { cloud_name: 'djp2nuknn', upload_preset: 'rmy5aved', 
		      cropping: 'server', 'folder': 'user_photos' },
		    function(error, result) { console.log(error, result) })
  
	},

	render: function(){

		return (
			<div className="profile-container"> 
				<a href="/#/addpicture" id="upload_widget_opener">Upload image</a>
				This will be a Profile!
			</div> 
			)
	}
})



