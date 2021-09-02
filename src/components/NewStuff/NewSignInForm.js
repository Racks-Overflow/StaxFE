import React from "react";
import Card from "../ui/Card";
import classes from "./NewSignIn.module.css";
import { useRef } from "react";

function NewSignInForm(props){
	
    const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const usernameInputRef =useRef();

	function submitHandler(event){
		event.preventDefault();

		const enteredEmail=emailInputRef.current.value;
		const enteredUsername=usernameInputRef.current.value;
		const enteredPassword=passwordInputRef.current.value;
		

		const userData = {
			username: enteredUsername,
			email: enteredEmail,
			password: enteredPassword,
		};
		props.onNewSignIn(userData);
	}
    return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.control}>
					<label htmlFor='title'>Username</label>
					<input type='text' required id='username' ref={usernameInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='title'>Email</label>
					<input type='text' required id='email' ref={emailInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="title">Password</label>
					<input type="text" required id="password" ref={passwordInputRef} />
				</div>
                <div className={classes.actions}>
                    <button>Create Sign-In</button>
                </div>

			</form>
		</Card>
	);
} 

export default NewSignInForm;