import React, { Component } from 'react';
import { Control, Form, Errors} from 'react-redux-form';
import { useForm } from 'react-hook-form';
import { Button, Formgroup, Label, Input, FormFeedback } from 'reactstrap';

// const required = val => val && val.length;
// const maxLength = len => val => !(val) || (val.length <= len);
// const minLength = len => val => (val) && (val.length >= len);
// const isNumber = (val) => !isNaN(Number(val));
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export function PostListing(props){

    const { register, handleSubmit } = useForm(); 

    function getFormData(object) {
        const formData = new FormData();
        Object.keys(object).forEach(key => formData.append(key, object[key]));
        return formData;
    }

    function onSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        const formData = getFormData(values);
        console.log(formData);
        // this.props.postFeedback(values);
        // this.props.resetFeedbackForm();
    }
    
    if(!props.auth.isAuthenticated){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Please sign in or create an account before posting a listing</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4> You can login with the button above and then start posting away!</h4>
                    </div>
                </div>
            </div>
        );
    }
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>WANT TO POST A RESIDENCE?</h1>
                </div>
                <div className="col-12">
                    <form model="postListing" name="postListing" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row form-group">
                            <div className="col-3 col-md-2">
                                <Label htmlFor="title"> TITLE </Label>
                            </div>
                            <div className="col">
                                <input 
                                    model=".title" 
                                    id="title" 
                                    name="title" 
                                    className="form-control"
                                    placeholder="Title"
                                    ref={register}
                                    />
                            </div>
                        </div>
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
                                <Label htmlFor="payRate" > PAY RATE </Label>
                            </div>
                            <div className="col">
                                <select name="payRate">
                                    <option value="week"> Weekly </option>
                                    <option value="half month"> Monthly </option>
                                    <option value="month"> Monthly </option>
                                    <option value="half year"> Semi-annually </option>
                                    <option value="year"> Yearly </option>
                                </select>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-3 col-md-2">
                                <Label htmlFor="numBathrooms" > NUMBER OF BATHROOMS </Label>
                            </div>
                            <div className="col">
                                <select name="numBathrooms">
                                    <option value={1}> 1 </option>
                                    <option value={2}> 2 </option>
                                    <option value={3}> 3 </option>
                                    <option value={4}> 4 </option>
                                    <option value={5}> 5 </option>
                                </select>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-3 col-md-2">
                                <Label htmlFor="numBedrooms" > NUMBER OF BEDROOMS </Label>
                            </div>
                            <div className="col">
                                <select name="numBedrooms">
                                    <option value={1}> 1 </option>
                                    <option value={2}> 2 </option>
                                    <option value={3}> 3 </option>
                                    <option value={4}> 4 </option>
                                    <option value={5}> 5 </option>
                                </select>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-3 col-md-2">
                                <Label htmlFor="area"> SQUARE FOOTAGE </Label>
                            </div>
                            <div className="col">
                                <input
                                    model=".area"
                                    id="area"
                                    name="area"
                                    className="form-control"
                                    placeholder="Square Footage"
                                    ref={register}
                                    type='number'
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
                                    type='number'
                                    />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-3 col-md-2">
                                <Label htmlFor="description"> DESCRIPTION </Label>
                            </div>
                            <div className="col">
                                <input
                                    model=".description"
                                    id="description"
                                    name="description"
                                    className="form-control"
                                    placeholder="Type your description here"
                                    ref={register}
                                    />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-3 col-md-2">
                                <Label htmlFor="images"> IMAGES </Label>
                            </div>
                            <div className="col">
                                <input
                                    model=".images"
                                    id="images"
                                    name="images"
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