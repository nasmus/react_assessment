import React from 'react'
import { Button } from '@mui/material'
import Header from './Header'

function Registration() {
  return (
    <div>
        <Header />
        <form method="POST">
			<label for="username">Phone Number</label>
			<input type="text" name="username" />
			<label for="password ">Password:</label>
			<input type="password" name="password" />
            <Button>upload</Button>
		</form>
    </div>
  )
}

export default Registration