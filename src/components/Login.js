
/**
 * Created by intelligrape on 9/5/17.
 */
import React, {Component} from 'react';

class Login extends Component{
    render() {
        return (<div>
           <form>
               <label>Email Id: </label>
               <input/>
               <label>Password:</label>
               <input/>
               <button>Login</button>
           </form>
        </div>)
    }
}

export default Login;


