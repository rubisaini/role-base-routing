
/**
 * Created by intelligrape on 9/5/17.
 */
import React, {Component} from 'react';

class Signup extends Component{
    render() {
        return (<div>
            <form>
                <label>Name:</label>
                <input/>
                <label>Email Id: </label>
                <input/>
                <label>Password:</label>
                <input/>
                <label>Confirm Password:</label>
                <input/>
                <button>Sign Up</button>
            </form>
        </div>)
    }
}

export default Signup;

