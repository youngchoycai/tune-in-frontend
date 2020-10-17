import React from 'react';
import axios from "axios";
import 'font-awesome/css/font-awesome.min.css';
// reactstrap components
import {
    Button
} from "reactstrap";

//import { AUTH_LINK } from '../constants';


class LoginButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            msg: this.props.msg ? this.props.msg : "Log In",
            redirect: false,
            userid: "xd",
            loading: false,
            redirectLink: ''
        }
        this.showLoading = this.showLoading.bind(this);
        this.hideLoading = this.hideLoading.bind(this);
        this.doTheLogin = this.doTheLogin.bind(this);
        
    }
    showLoading() {
        this.setState({loading: true});
    }
    hideLoading() {
        setTimeout(()=> {this.setState({loading: false});}, 5000)
    }
    doTheLogin() {
        this.showLoading();
        axios.get('https://tune-in-pp-llc.herokuapp.com/api/login', {headers: {'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'}}).then(res => {
            var response = res.data;
            let authLink = 'http://accounts.spotify.com/authorize';
            let clientId = response.clientId;
            let redirectUri = encodeURIComponent(response.redirectUri);
            let scope = encodeURIComponent(response.scope);
            this.setState({
                    redirect: true, 
                    redirectLink: `${authLink}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`
                }
                );
                this.hideLoading();
            }
        );
    }
    
    render() {
        const redirectCheck = this.state.redirect;
        const loadingCheck = this.state.loading;
        return (
            <>
            {redirectCheck ? window.location.replace(this.state.redirectLink) : null}
                <Button className="btn-round ml-auto" size="lg" color="success" onClick={()=>this.doTheLogin()}>
                    {!loadingCheck ? <span><i className="tim-icons icon-key-25"/> {this.state.msg} </span> : <span><i className="fa fa-refresh fa-spin"/> Logging You In...</span>}
                </Button>
            </>
            );
    }
}

export default LoginButton;

