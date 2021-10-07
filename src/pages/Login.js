import React from 'react';

const AUTH_URL = "https://connect.deezer.com/oauth/auth.php?app_id= 506362&redirect_uri=http://localhost:3000/main&perms=basic_access,email"

export default function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "black"}}>
      <a className="btn btn-success btn-lg" style={{ padding: "30px 70px"}} href={AUTH_URL}>Login</a>
    </div>
  );
}
