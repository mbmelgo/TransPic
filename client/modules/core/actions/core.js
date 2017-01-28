export default {

  registerUser({FlowRouter}){
    FlowRouter.go('/signup')
  },

  signupUser({Meteor, LocalState, FlowRouter, Collections}, formData){
    if(!formData.username)return LocalState.set('ACCOUNT_ERROR','Username is Required');
    if(!formData.password)return LocalState.set('ACCOUNT_ERROR','Password is Required');
    if(!formData.profile.firstName)return LocalState.set('ACCOUNT_ERROR','First Name is Required');
    if(!formData.profile.lastName)return LocalState.set('ACCOUNT_ERROR','Last Name is Required');
    if(!formData.profile.organization)return LocalState.set('ACCOUNT_ERROR','Organization is Required');
    if(!formData.profile.occupation)return LocalState.set('ACCOUNT_ERROR','Occupation is Required');

    Meteor.call("addUser",formData, function (err){
      if(err) return LocalState.set('ACCOUNT_ERROR',"Server Error: Account can't be created");
      else { FlowRouter.go('/signup');}
    });
  },


  clearAccountErrors({LocalState}){
    return LocalState.set({"ACCOUNT_ERROR": null});
  },
}
