import Session from '../Credential/Session.js'

export default { 
  
  WriteCredential: data => {
      localStorage.setItem(Session.__SESSION_KEY__,Session.CreateBrowserSession(data))
  },
  
  GetCredential: () => {
    var Credential = localStorage.getItem(Session.__SESSION_KEY__)
    if(Credential == null){
      return{
        email: null,
        token: null,
        refresh_token: null,
        auth :false,
        name: null,
        alias:null,
        admin: null
      }
    }else{
      Credential = Session.VerifySession(Credential);
      if(!Credential){
        this.RemoveCredential()
        return null
      }
    }
    return Credential
  },
  
  RemoveCredential : function(){
    localStorage.removeItem(Session.__SESSION_KEY__);
  }
}
