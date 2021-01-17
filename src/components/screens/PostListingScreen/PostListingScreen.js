import React, { Component } from 'react';
import { Control, Form, Errors} from 'react-redux-form';
import { useForm } from 'react-hook-form';
import { Button, Formgroup, Label, Input, FormFeedback } from 'reactstrap';

// const required = val => val && val.length;
// const maxLength = len => val => !(val) || (val.length <= len);
// const minLength = len => val => (val) && (val.length >= len);
// const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export function PostListing(){

    const { register, handleSubmit } = useForm(); 

    function onSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        // this.props.postFeedback(values);
        // this.props.resetFeedbackForm();
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>WANT TO POST A RESIDENCE?</h1>
                </div>
                <div className="col-12">
                    <form model="postListing" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row form-group">
                            <div className="col-3 col-md-2">
                                <Label htmlFor="address"> ADDRESS </Label>
                            </div>
                            <div className="col">
                                <input 
                                    model=".address" 
                                    id="address" 
                                    name="address" 
                                    className="form-control"
                                    placeholder="Address"
                                    ref={register}
                                    />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-3 col-md-2">
                                <Label htmlFor="price" > PRICE(CAD) </Label>
                            </div>

                            <div className="col">
                                <input
                                    model=".price"
                                    id="price" 
                                    name="price" 
                                    className="form-control" 
                                    placeholder="$ Price"
                                    ref={register}
                                    type="number"
                                    />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-3 col-md-2">
                                <Label htmlFor="telnum"> PHONE NUMBER </Label>
                            </div>
                            <div className="col">
                                <input
                                    model=".telnum"
                                    id="telnum"
                                    name="telnum"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    ref={register}
                                    type=''
                                    />
                            </div>
                        </div>
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
                                <Label htmlFor="message"> DESCRIPTION </Label>
                            </div>
                            <div className="col">
                                <input
                                    model=".message"
                                    id="message"
                                    name="message"
                                    className="form-control"
                                    placeholder="Type your description here"
                                    ref={register}
                                    />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-3 col-md-2">
                                <Label htmlFor="message"> IMAGES </Label>
                            </div>
                            <div className="col">
                                <input
                                    model=".file"
                                    id="file"
                                    name="file"
                                    className="form-control"
                                    ref={register}
                                    type="file"
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
 
export default PostListing;