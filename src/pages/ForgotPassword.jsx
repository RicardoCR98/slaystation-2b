import React, { useState, useEffect } from 'react';
import { Input } from '../components/Input';
import { useNavigate } from 'react-router-dom';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [answer, setAnswer] = useState('');
  const naviagate = useNavigate();

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    fetch(`http://localhost:3000/questions/${randomNum}`)
      .then((res) => res.json())
      .then((data) => setSelectedQuestion(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !newPassword || !answer) {
      alert('Por favor, llena todos los campos.');
      return;
    }
    fetch('http://localhost:3000/users/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        question_id: selectedQuestion.question_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(answer);
        if (data.error) {
          alert(data.error);
        } else {
          if (data.answer_description !== answer) {
            alert('Respuesta incorrecta');
            return;
          } else {
            fetch(`http://localhost:3000/users/${data.user_id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ password: newPassword }),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.error) {
                  alert(data.error);
                } else {
                  alert('Contraseña actualizada correctamente');
                  naviagate('/login');
                }
              });
          }
        }
      });
  };

  return (
    <div className='flex items-center justify-center h-screen bg-gray-900'>
      <form
        className='w-80 flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-lg'
        onSubmit={handleSubmit}
      >
        <h2 className='text-white text-2xl font-bold text-center mb-4'>
          Recuperar Contraseña
        </h2>
        <div className='form-group'>
          <Input
            label='Correo Electrónico:'
            placeholder='Introduce tu correo'
            id='email'
            type='email'
            isRequired={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <Input
            label={selectedQuestion.question_description}
            placeholder='Introduce tu respuesta'
            id='answer'
            type='text'
            isRequired={true}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <Input
            label='Nueva Contraseña:'
            placeholder='Introduce tu nueva contraseña'
            id='new-password'
            type='password'
            isRequired={true}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-max mx-auto'
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
