import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline/index";
import Button from "@material-ui/core/Button/index";
import Typography from "@material-ui/core/Typography/index";
import TextField from "@material-ui/core/TextField/index";
import Container from "@material-ui/core/Container/index";
import Paper from "@material-ui/core/Paper/index";

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

class LoginForm extends React.Component {

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <Paper style={style.Paper}>
          <CssBaseline />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form name="f" action="/perform_login" method="POST">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign In
            </Button>
          </form>
        </Paper>
      </Container>
    );
  }
}

export default LoginForm;