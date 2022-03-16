import React, { useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { SignInModal } from './components/SignInModal';
import { SignUpModal } from './components/SignUpModal';

function App() {
  const [signInModalOn, setSignInModalOn] = useState(false);
  const [signUpModalOn, setSignUpModalOn] = useState(false);

  return (
    <div>
      <Header setSignInModalOn={setSignInModalOn} setSignUpModalOn={setSignUpModalOn} />
      {signInModalOn && <SignInModal setSignInModalOn={setSignInModalOn} />}
      {signUpModalOn && <SignUpModal setSignUpModalOn={setSignUpModalOn} />}
      <Main />
    </div>
  );
}

export default App;
