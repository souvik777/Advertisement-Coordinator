import React,{Component} from 'react';
import {Nav,Navbar,Form,FormControl, NavLink,Carousel,Dropdown} from 'react-bootstrap';

import {Link, Redirect} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import "../css/hero.css";
import adv2 from "../images/adv2.jpg";
import adv4 from "../images/adv4.jpg";
import adv5 from "../images/adv5.png";

class HeroSection extends Component {

constructor(props){
    super(props);
    this.state={
        username:"",
        password:"",
        isLoggedIn:false
    }

    this.myChangeHandler=this.myChangeHandler.bind(this);
    this.mySubmitHandler=this.mySubmitHandler.bind(this);
    this.mySignOutHandler=this.mySignOutHandler.bind(this);
}
myChangeHandler(event)
{
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]:val})
}
mySubmitHandler(event)
{
    if(this.state.username.length>0 && this.state.password.length>0)
    {

        this.setState({isLoggedIn:true})
        alert("hello "+this.state.username)
    }
    
}
mySignOutHandler()
{
    this.setState({isLoggedIn:false,username:"",password:""})
}

render()
{
    return(
    this.state.isLoggedIn?
    <div>
        <div className="container">
            <Navbar  bg="dark" expand="lg" >
                <Navbar.Brand style={{marginLeft:"100px",fontSize:"30px"}}><Link style={{textDecoration:"none",color:"white"}} to="/"><i style={{padding:"10px"}} className="fa fa-cube"/>AddJency</Link></Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink style={{textDecoration:"none",fontSize:"20px",color: "white"}} >Our Services</NavLink>
                    <NavLink style={{textDecoration:"none",fontSize:"20px",color: "white"}} >Contact Us</NavLink>
                    <NavLink style={{textDecoration:"none",fontSize:"20px",color: "white"}} >About us</NavLink>
                </Nav>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline style={{marginRight:"35px"}}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <i className="fa fa-search" style={{color:"white"}}/>
                    </Form>
                    <NavLink onClick={this.mySignOutHandler} style={{textDecoration:"none",fontSize:"20px",color: "white"}} >Sign Out</NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>

        <Carousel style={{marginLeft:"70px",marginRight:"70px",marginBottom:"100px",marginTop:"50px"}} >
            <Carousel.Item >
                <img
                    style={{width:"100%",height:"600px"}}
                    className="d-inline-block p-3 mx-auto"
                    src={adv2}
                    alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{width:"100%",height:"600px"}}
                className="d-inline-block p-3"
                src={adv4}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{width:"100%",height:"600px"}}
                className="d-inline-block p-3"
                src={adv5}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    :
    <div className="bg-img">
        <div className="container">
    <Navbar bg="transparent" >
        <Navbar.Brand style={{marginLeft:"100px",fontSize:"30px"}}><Link style={{textDecoration:"none",color:"white"}} to="/"><i style={{padding:"10px"}} className="fa fa-cube"/>AddJency</Link></Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <NavLink style={{textDecoration:"none",fontSize:"20px",color: "white",margin:"5px"}} >Services</NavLink>
            <NavLink style={{textDecoration:"none",fontSize:"20px",color: "white",margin:"5px"}} >Contact</NavLink>
            <NavLink style={{textDecoration:"none",fontSize:"20px",color: "white",margin:"5px"}} >About</NavLink>
        </Nav>
        <Form inline >
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <i className="fa fa-search" style={{color:"white"}}/>
        </Form>
        
        <Nav style={{textDecoration:"none",fontSize:"20px",color: "white",marginRight:"50px"}} >
            <Dropdown>
                <Dropdown.Toggle id="dropdown-custom-components">
                    Sign in
                </Dropdown.Toggle>
                <Dropdown.Menu >
                <Dropdown.Item eventKey="1">
                <form onSubmit={this.mySubmitHandler}>
            <div className="Model">
                <h2 className="tag">Login</h2>
            <input name="username" onChange={this.myChangeHandler} value={this.state.username} type="email" placeholder="Email" />
            <input name="password" onChange={this.myChangeHandler} type="password" placeholder="Password" />
            <input type="submit" value="submit" className="bt" />
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
            </div>
        </form>

                </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
        <form onSubmit={this.mySubmitHandler}>
            <div className="Model">
                <h2 className="tag">Login</h2>
            <input name="username" onChange={this.myChangeHandler} value={this.state.username} type="email" placeholder="Email" />
            <input name="password" onChange={this.myChangeHandler} type="password" placeholder="Password" />
            <input type="submit" value="submit" className="bt" />
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
            </div>
        </form>

    </div>
    );
}
}

export default HeroSection;