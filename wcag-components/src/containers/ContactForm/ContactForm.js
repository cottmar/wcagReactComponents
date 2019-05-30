import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/ToggleButton/ToggleButton';
import { updatedObject, checkValidity } from '../../shared/utility.js';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    contactForm: {
      name: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your Name'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    street: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Street Address'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    zipCode: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'ZIP Code'
        },
        value: '',
        validation: {
            required: true,
            minLength: 5,
            maxLength: 5,
            isNumeric: true
        },
        valid: false,
        touched: false
    },
    email: {
        elementType: 'input',
        elementConfig: {
            type: 'email',
            placeholder: 'Your E-Mail'
        },
        value: '',
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false
    },
},
formIsValid: false
}

  contactHandler = (event ) => {
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in this.state.contactForm) {
      formData[formElementIdentifier] = this.state.contactForm[formElementIdentifier].value;
    }
  }

  inputChangedHandler = (event, inputIdentifier) => {
    console.log(event.target.value);
    const updatedFormElement = updatedObject(this.state.contactForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(event.target.value, this.state.contactForm[inputIdentifier].validation),
      touched: true
      }
    );
    const updatedContactForm = updatedObject(this.state.contactForm, {
    [inputIdentifier]: updatedFormElement
    })
    
    let formIsValid = true;
    for (let inputIdentifier in updatedContactForm) {
      formIsValid = updatedContactForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ contactForm: updatedContactForm, formIsValid: formIsValid });
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.contactForm) {
      formElementsArray.push({
        id: key,
        config: this.state.contactForm[key]
      });
    }
    let form = (
      <form onSubmit={this.contactHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid}>SUBMIT!</Button> 
      </form>
    );

    return (
      <div className={styles.ContactForm}>
        <h1>Enter Your Contact Data</h1>
        {form}
      </div>
    );
  }
}

export default ContactForm;

// need , redux, routing, , success on button

// Input, orderHandler, 