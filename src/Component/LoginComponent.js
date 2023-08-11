import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom";
import { Button } from '@mui/material'
import { CheckBox } from '@mui/icons-material'

function LoginComponent() {
  return (
    <div>
        <Header />
        <form method="POST">
			<label for="username">Phone Number</label>
			<input type="text" name="username" />
			<label for="password ">Password:</label>
			<input type="password" name="password" />
            <Button>add button</Button>
		</form>
        <p>not register yet</p>
        <div className="registration">
          <Link to='/registration' >Sign Up</Link>
        </div>
    </div>
  )
}

export default LoginComponent