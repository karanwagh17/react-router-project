

const Private = ({ children }) => {

  const auth = localStorage.getItem('token');

 
    if (!auth) {
window.location.href='/Login'

    
    }
    else if(auth)
    {
      return children
    }
  }



export default Private;
