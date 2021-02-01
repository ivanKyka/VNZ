import React, { useState } from 'react';
import styled from 'styled-components';
import { sendQuestion } from "../api/questions";

const QuestionForm = () => {

    const [isSended, setIsSended] = useState(false);
    function submitHandler(e) {
        e.preventDefault();
        const data = Array.from(new FormData(e.target).entries()).reduce((acc, [k, v]) => {
            acc[k] = v;
            return acc;
        },{})
        sendQuestion(new URLSearchParams(data))
            .then(() => setIsSended(true))
    }

    return (
        <FormContainer>
            <form onSubmit={submitHandler}>
                <h3>Залишити питання:</h3>
                <fieldset>
                    <input type="text" name="name" placeholder="Ім'я" required/>
                </fieldset>
                <fieldset>
                    <input type="tel" name="phone" placeholder="Контактний номер" required/>
                </fieldset>
                <fieldset>
                    <input type="email" name="email" placeholder="Електронна скринька" required/>
                </fieldset>
                <fieldset>
                    <textarea name="question" placeholder="Запитання" required/>
                </fieldset>
                {!isSended && <button type="submit">Ok</button>}
                {isSended && <Message>Запитання надіслано! <br/>Очікуйте на дзвінок</Message>}
            </form>
        </FormContainer>
    )
}

export default QuestionForm;

const FormContainer = styled.div`
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    position: relative;

  form input[type="text"],
  form input[type="email"],
  form input[type="tel"],
  form input[type="url"],
  form textarea,
  form button[type="submit"] {
    font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
  }

  form {
    background: #F9F9F9;
    padding: 25px;
    margin: 150px 0;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  form h3 {
    display: block;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
  }

  form h4 {
    margin: 5px 0 15px;
    display: block;
    font-size: 13px;
    font-weight: 400;
  }

  fieldset {
    border: medium none !important;
    margin: 0 0 10px;
    min-width: 100%;
    padding: 0;
    width: 100%;
  }

  form input[type="text"],
  form input[type="email"],
  form input[type="tel"],
  form input[type="url"],
  form textarea {
    width: 100%;
    border: 1px solid #ccc;
    background: #FFF;
    margin: 0 0 5px;
    padding: 10px;
  }

  form input[type="text"]:hover,
  form input[type="email"]:hover,
  form input[type="tel"]:hover,
  form input[type="url"]:hover,
  form textarea:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
  }

  form textarea {
    height: 100px;
    max-width: 100%;
    resize: none;
  }

  form button[type="submit"] {
    cursor: pointer;
    width: 100%;
    border: none;
    background: #4CAF50;
    color: #FFF;
    margin: 0 0 5px;
    padding: 10px;
    font-size: 15px;
  }

  form button[type="submit"]:hover {
    background: #43A047;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }

  form button[type="submit"]:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  .copyright {
    text-align: center;
  }

  form input:focus,
  form textarea:focus {
    outline: 0;
    border: 1px solid #aaa;
  }

  ::-webkit-input-placeholder {
    color: #888;
  }

  :-moz-placeholder {
    color: #888;
  }

  ::-moz-placeholder {
    color: #888;
  }

  :-ms-input-placeholder {
    color: #888;
  }
`;

const Message = styled.p`
  border: 1px solid #43A047;
  color: #43a047;
  padding: 5px;
  text-align: center;
  background: rgba(67, 160, 71, 0.2);
`;