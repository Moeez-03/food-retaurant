import React,{Component} from 'react';
import Toolbar from '../../Components/loginForm/login';

class Login extends Component{
    
    render(){
        let dtr=this.props.loaded?(
            <div>
                
                {/* <Backdrop click={()=>console.log("clicked")}/> */}
                <loginform data={this.props.data} adding={this.props.adding()}>
            <Toolbar count={this.props.inbox} />
            </loginform>
            </div>
        ):null;
        return(
            <div>
                {dtr}
            </div>
        );
    }
}

export default Login;