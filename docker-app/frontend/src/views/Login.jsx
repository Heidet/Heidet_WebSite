import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import styled from "styled-components";



export default function Login () {
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  // render() {
  //   switch(this.state.currentView) {
  //     case "signUp":
        // return (
          // <Login>
          //   <form>
          //     <h2>Sign Up!</h2>
          //     <fieldset>
          //       <legend>Create Account</legend>
          //       <ul>
          //         <li>
          //           <label htmlFor="username">Username:</label>
          //           <input type="text" id="username" required/>
          //         </li>
          //         <li>
          //           <label htmlFor="email">Email:</label>
          //           <input type="email" id="email" required/>
          //         </li>
          //         <li>
          //           <label htmlFor="password">Password:</label>
          //           <input type="password" id="password" required/>
          //         </li>
          //       </ul>
          //     </fieldset>
          //     <button>Submit</button>
          //     <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
          //   </form>
          // </Login>
        // )
      //   break
      // case "logIn":
        return (
          <FormLogin>
            <form className="formblock"  onSubmit={handleSubmit}>
              <h2>Administration</h2>
              <fieldset>
                <legend>Connexion</legend>
                <ul>
                  <li>
                    <label htmlFor="username">Username:</label>
                    <input className="username" type="text" id="username" required/>
                  </li>
                  <li>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" required/>
                  </li>
                  <li>
                    <i/>
                    {/* <a onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a> */}
                  </li>
                </ul>
              </fieldset>
              <button  type="submit" >Login</button>
              {/* <button>Create an Account</button> */}
            </form>
          </FormLogin>
        )
      //   break
      // case "PWReset":
      //   return (
      //     <Login>
      //       <form>
      //         <h2>Reset Password</h2>
      //           <fieldset>
      //             <legend>Password Reset</legend>
      //             <ul>
      //               <li>
      //                 <em>A reset link will be sent to your inbox!</em>
      //               </li>
      //               <li>
      //                 <label htmlFor="email">Email:</label>
      //                 <input type="email" id="email" required/>
      //               </li>
      //             </ul>
      //           </fieldset>
      //           <button>Send Reset Link</button>
      //           <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
      //       </form>
      //     </Login>
      //   )
      // default:
      //   break
    // }
  // };

}



const FormLogin = styled.div`
@import url('https://fonts.googleapis.com/css?family=Jura:400');
* { font-family: Jura, Arial; font-weight: 400; }
body { margin: 0; padding: 0; }
h1,h2,h3,h4,h5,h6,p { margin: 0; }
  display: grid;
  grid-template-columns: 1fr minmax(200px,400px) 1fr;
  grid-template-rows: 1fr minmax(auto,1fr) 1fr;
  grid-gap: 10px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  box-sizing: border-box;
  form {
    grid-column: 2;
    grid-row: 2;
    display: grid;
    grid-gap: 10px;
    margin: auto 0;
    padding: 20px;
    background-color: rgba(255,255,255,0.9);
    border-radius: 10px;
    box-shadow: 0 32px 64px rgba(0,0,0,0.2);
    h2 {
      margin-bottom: 5px;
      text-align: center;
      text-shadow: 0 4px 16px #fff;
      font-size: 30px;
      font-weight: 100;
    }
    fieldset {
      margin: 0;
      background-color: #fff;
      border: none;
      border-radius: 5px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      legend {
        padding: 5px;
        background-color: #fff;
        border-radius: 5px;
      }
      ul {
        margin: 0;
        padding: 0;
        li {
          display: grid;
          align-items: center;
          margin: 10px;
          a {
            color: #02c;
          }
          em {
            grid-column: span 2;
            text-align: center;
            padding: 5px;
          }
          label {
            text-align: left;
            padding-bottom: 2px;
          }
          input {
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
            &:hover {
              border: 1px solid #aaf;
            }
          }
        }
      }
    }
    button {
      padding: 10px;
      border:1px solid rgba(0,0,0,0);
      border-radius: 5px;
      background: #fff;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      &:hover {
        background-color: #eef;
        border: 1px solid #aaf;
      }
    }
  }
@media only screen and (min-width: 420px) {
  form {
    h2 {
      font-size: 40px;
    }
    fieldset {
      ul {
        li {
          grid-template-columns: 100px 1fr;
          label {
            padding-right: 10px;
            padding-bottom: 0;
            text-align: right !important;
          }
        }
      }
    }
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}
`
  
