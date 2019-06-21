import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

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
          <form name="f" action="login" method="POST">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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