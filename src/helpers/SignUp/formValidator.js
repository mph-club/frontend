import FormMessage from '../../tools/messages';

export default{ 
        
  ValidateForm: function(self){
    
    var valid = true
    // eslint-disable-next-line
    if(self.state.email.value.trim() === ""){
      self.setState({
        email:{
          ...self.state.email,
          error : true,
          message : FormMessage.AUTHENTICATION.ERROR.EMAIL.EMPTY,
        }
      })
      valid = false
    } else if(!this.ValidateEmail(self.state.email.value.trim())){
      self.setState({
        email:{
          ...self.state.email,
          error : true,
          message : FormMessage.AUTHENTICATION.ERROR.EMAIL.INVALID,
        }
      })
      valid = false
    }
    
    if(self.state.phone.value.trim() === ""){
      self.setState({
        phone:{
          ...self.state.phone,
          error : true,
          message : FormMessage.AUTHENTICATION.ERROR.PHONE.EMPTY,
        }
      })
      valid = false
    } 
    
    if(self.state.password.value.trim() === ""){
      self.setState({
        password:{
          ...self.state.password,
          error : true,
          message : FormMessage.AUTHENTICATION.ERROR.PASSWORD.EMPTY,
        }
      })
      valid = false
    }

    return valid
  },
  
  ValidateEmail(email) {
   
    // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
}
