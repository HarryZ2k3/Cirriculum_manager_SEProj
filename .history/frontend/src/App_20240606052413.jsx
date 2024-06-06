import AnimatedRoutes from './AnimatedRoutes'
import Header from './components/Header'
// import Footer from './components/Footer'

export default function App() {
	return (
		<div className="flex h-screen flex-col">
			<Header />
			<div className="flex flex-1 overflow-hidden">
				<AnimatedRoutes />
			</div>
			{/* <Footer /> */}
		</div>
	)
}

import React, { useState } from 'react';
import LoginForm from './LoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  const handleLoginSuccess = (token) => {
    setIsLoggedIn(true);
    setToken(token);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <h2>Welcome, you are logged in!</h2>
          {/* Add content based on logged in state and token */}
        </div>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;