import React, { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
// import Home from './Home';


function SignInWithGoogle() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
   const provider = new GoogleAuthProvider();
  const googleSignIn = ()=>{
    signInWithPopup(auth, provider).then((data)=>{
      console.log(data);
      setValue(data.user.email);
      navigate('/');
    })
    .catch((error)=>{
      const errorCode = error.code;
      console.log(errorCode)
    })
  }
  return (
    <div>
        <button onClick={googleSignIn}><GoogleIcon/></button>
    </div>
  )
}

export default SignInWithGoogle