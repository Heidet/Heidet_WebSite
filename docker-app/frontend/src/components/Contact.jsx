import React from "react";

const Header = () => {
    return (
        <h1>Contact</h1>
    );
};

class Message extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clearScreen: false,
        messageSubmitted: false,
        resetForm: false,
        name: this.props.name,
        email: this.props.email,
        message: "",
        errorMessage: "",
      };
      this.handleBlur = this.handleBlur.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleReset = this.handleReset.bind(this);
    }
  
    validate() {
      return (
        this.state.message.length > 0
      );
    }
  
    handleBlur(event) {
      if (!this.validate()) {
        this.setState({errorMessage: "Message Requis!"});
      } else {
        this.setState({errorMessage: ""});
      }
    }
    
    handleChange(event) {
      this.setState({message: event.target.value});
    }
  
    handleSubmit(event) {
      if (!this.validate()) {
        event.preventDefault();
        return;
      } else {
        event.preventDefault();
        this.setState({clearScreen: true, messageSubmitted: true});
      }
    }
  
    handleReset() {
      this.setState({clearScreen: true, resetForm: true});
    }
  
    render() {
      if (!this.state.clearScreen) {
        return (
          <div>
            <Header />
            <div className="form-container">
              <div className="user-info">
                <span className="ion-ios-person"></span>
                <span>&nbsp;&nbsp;{this.state.name}</span>
              </div>
              <br />
              <div className="user-info">
                <span className="ion-ios-mail"></span>
                <span>&nbsp;&nbsp;{this.state.email}</span>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-input">
                    <span className="ion-md-create"></span>
                  <textarea value={this.state.value} placeholder="Ecrire votre message" rows="4" autoFocus onBlur={this.handleBlur} onChange={this.handleChange} />
                </div>
                <span className="error-message">{this.state.errorMessage}</span>
                <input type="submit" value="Envoyer" disabled={!this.validate()} />
                <input type="button" value="Effacer" onClick={this.handleReset} />
              </form>
            </div>
          </div>
        );
      }
      if (this.state.messageSubmitted) {
        return (
          <Submitconfirm name={this.state.name} email={this.state.email} message={this.state.message} />
        );
      }
      if (this.state.resetForm) {
        return (
          <Name />
        );
      }
    }
  }
  
  class Email extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clearScreen: false,
        emailSubmitted: false,
        resetForm: false,
        name: this.props.name,
        email: "",
        errorMessage: "",
      };
      this.handleBlur = this.handleBlur.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleReset = this.handleReset.bind(this);
    }
  
    validate() {
      return (
        /^[a-zA-Z0-9\.]+@[a-zA-Z0-9\.]+\.[A-Za-z]+$/.test(this.state.email)
      );
    }
  
    handleBlur(event) {
      if (!this.validate()) {
        this.setState({errorMessage: "Adresse mail requis!"})
      } else {
        this.setState({errorMessage: ""});
      }
    }
    
    handleChange(event) {
      this.setState({email: event.target.value});
    }
  
    handleSubmit(event) {
      if (!this.validate()) {
        event.preventDefault();
        return;
      } else {
        event.preventDefault();
        this.setState({clearScreen: true, emailSubmitted: true});
      }
    }
  
    handleReset() {
      this.setState({clearScreen: true, resetForm: true});
    }
  
    render() {
      if (!this.state.clearScreen) {
        return (
          <div>
            <Header />
            <div className="form-container">
              <div className="user-info">
                <span className="ion-ios-person"></span>
                <span>&nbsp;&nbsp;{this.state.name}</span>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-input">
                    <span className="ion-ios-mail"></span>
                  <input type="email" value={this.state.value} placeholder="Entrez votre adresse mail" autofocus="true" onBlur={this.handleBlur} onChange={this.handleChange} />
                </div>
                <span className="error-message">{this.state.errorMessage}</span>
                <input type="submit" value="Suivant" disabled={!this.validate()} />
                <input type="button" value="Effacer" onClick={this.handleReset} />
              </form>
            </div>
          </div>
        );
      }
      if (this.state.emailSubmitted) {
        return (
          <Message name={this.state.name} email={this.state.email} />
        );
      }
      if (this.state.resetForm) {
        return (
          <Name />
        );
      }
    }
  }
  
export class Name extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        displayHeader: true,
        clearScreen: false,
        nameSubmitted: false,
        name: "",
        errorMessage: "",
      };
      this.handleBlur = this.handleBlur.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    validate() {
      return (
        this.state.name.length > 0
      );
    }
  
    handleBlur(event) {
      if (!this.validate()) {
        this.setState({errorMessage: "Nom requis!"})
      } else {
        this.setState({errorMessage: ""});
      }
    }
    
    handleChange(event) {
      this.setState({name: event.target.value})
    }
    
    handleSubmit(event) {
      if (!this.validate()) {
        event.preventDefault();
        return;
      } else {
        event.preventDefault();
        this.setState({clearScreen: true, nameSubmitted: true});
      }
    }
  
    render() {
      if (!this.state.clearScreen) {
        return (
          <div>
            <Header />
            <div className="form-container">
              <form onSubmit={this.handleSubmit}>
                <div className="form-input">
                  <span className="ion-ios-person"></span>
                  <input type="text" value={this.state.value} placeholder="Votre nom" onBlur={this.handleBlur} onChange={this.handleChange} />
                </div>
                <span className="error-message">{this.state.errorMessage}</span>
                <input type="submit" value="Suivant" disabled={!this.validate()} />
              </form>
            </div>
          </div>
        );
      }
      if (this.state.nameSubmitted) {
        return (
          <Email name={this.state.name} />
        );
      }
    }
  }
  
class Submitconfirm extends React.Component {
    render () {
      return (
        <div>
           <Header />
          <p className="submit-message">Merci pour votre message !</p>
          <p>Votre e-mail a été soumis et nous vous contacterons sous peu..</p>
          <br />
          <h3>Votre Message:</h3>
          <br />
          <div className="user-info">
            <span className="ion-ios-person"></span>
            <small>&nbsp;&nbsp;{this.props.name}</small>
          </div>
          <br/>
          <div className="user-info">
            <span className="ion-ios-mail"></span>
             <small>&nbsp;&nbsp;{this.props.email}</small>
          </div>
          <br />
          <div className="user-info">
            <span className="ion-ios-create"></span>
            <small>&nbsp;&nbsp;{this.props.message}</small>
          </div>
        </div>
      );
    }
}
  
