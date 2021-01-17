import React, { Component } from 'react';
import { Control, Form, Errors} from 'react-redux-form';
import { useForm } from 'react-hook-form';
import { Button, Formgroup, Label, Input } from 'reactstrap';

// const required = val => val && val.length;
// const maxLength = len => val => !(val) || (val.length <= len);
// const minLength = len => val => (val) && (val.length >= len);
// const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export default function SignUp(props){

    const { register, handleSubmit } = useForm(); 

    const testEmail = (email) =>(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase())
    )
    

    const onSubmit = (values) => {
        if(!testEmail(values.email)){
            alert('must submit a valid email');
            return;
        }
        if(values.password !== values.rePassword){
            alert('passwords do not match');
            return;
        }
        else{
            console.log("Current State is: " + JSON.stringify(values));
            const changedValues = {
                username: values.username,
                email: values.email,
                password: values.password
            }
            props.postSignUp(changedValues);
            // props.history.push('/');
        }
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>CREATE YOUR ACCOUNT</h1>
                </div>
                <div className="col-12">
                    <form model="signup" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row form-group">
                            <div className="col-3 col-md-2">
                                <Label htmlFor="email"> EMAIL </Label>
                            </div>
                            <div className="col">
                                <input
                                    model=".email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    rows="12"
                                    placeholder="Email"
                                    ref={register}
                                    />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-3 col-md-2">
                                <Label htmlFor="username"> USERNAME </Label>
                            </div>
                            <div className="col">
                                <input
                                    model=".username"
                                    id="username"
                                    name="username"
                                    className="form-control"
                                    placeholder="Create Your Username"
                                    ref={register}
                                    />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-3 col-md-2">
                                <Label htmlFor="password"> PASSWORD </Label>
                            </div>
                            <div className="col">
                                <input
                                    model=".password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                    type="password"
                                    ref={register}
                                    />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-3 col-md-2">
                                <Label htmlFor="rePassword"> RETYPE PASSWORD </Label>
                            </div>
                            <div className="col">
                                <input
                                    model=".rePassword"
                                    id="rePassword"
                                    name="rePassword"
                                    className="form-control"
                                    placeholder="Password"
                                    type="password"
                                    ref={register}
                                    />
                            </div>
                        </div>
                        <div className="row form-group justify-content-center">
                            <div className="col-12 col-sm-5">
                                <input type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}