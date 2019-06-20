import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

 class LoginForm extends Component {
     state = {
       text: ""
     };

     handleChange = e => {
       this.setState({
         text: e.target.value
       });
     };

     handleSubmit = e => {
       e.preventDefault();
       this.props.AddTodo(this.state);
       this.setState({
         text: ""
       });
     };

     render() {
       return (
         <div>
           <form name='f' action="login" method='POST'>
             <FormControl margin="normal" required fullWidth>
               <InputLabel htmlFor="text">Username</InputLabel>
               <Input type='text' name='username' value='' />
             </FormControl>
             <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="text">Password</InputLabel>
                <Input type='password' name='password' value='' />
             </FormControl>
             <Button type="submit" fullWidth variant="contained" color="primary">
               Login
             </Button>
           </form>
         </div>
       );
     }
   }
 }

 export default LoginForm;