import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../components/Input';
import { AvatarUploader } from '../components/AvatarUploader';
import { QuestionsModal } from '../components/QuestionsModal';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userId, setUserId] = useState(null); // Nueva variable para almacenar el ID del usuario

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: name,
          userLastName: lastName,
          userNickname: nickname,
          userPhone: phoneNumber,
          userEmail: email,
          password,
          userImage: selectedAvatar,
          userType: 1
        }),
      });
      const data = await response.json();
      if (response.status === 200) {
        console.log('gary mmv');
        navigate('/login');
        //setUserId(data.user_id); // Almacenar el ID del usuario
        //setIsSignUpModalOpen(true); // Abrir el modal de preguntas de seguridad
      } else {
        console.error(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSaveAnswers = async (answers) => {
  //   try {
  //     const saveAnswerPromises = answers.map((answer, index) =>
  //       fetch('http://localhost:3000/answers', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           user_id: userId,
  //           question_id: questions[index].question_id,
  //           answer_description: answer,
  //         }),
  //       })
  //     );

  //     const responses = await Promise.all(saveAnswerPromises);
  //     const data = await Promise.all(responses.map((res) => res.json()));

  //     if (responses.every((res) => res.status === 201)) {
  //       navigate('/login');
  //       console.log('Security answers saved:', data);
  //     } else {
  //       console.error(data);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleAccept = () => {
    setIsTermsModalOpen(false);
    setIsChecked(true);
  };

  const handleCloseModal = () => {
    setIsTermsModalOpen(false);
    setIsChecked(false);
  };

  const handleAvatarChange = (avatar) => {
    setSelectedAvatar(avatar);
  };

  // useEffect(() => {
  //   try {
  //     fetch('http://localhost:3000/questions')
  //       .then((res) => res.json())
  //       .then((data) => setQuestions(data));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  return (
    <div className='flex items-center justify-between bg-gray-900 h-screen'>
      <div
        className='w-2/4 h-full bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(https://images4.alphacoders.com/119/thumb-1920-1194463.jpg)`,
        }}
      ></div>
      <div className='flex items-center justify-center w-2/4 h-full'>
        <form
          className='flex flex-col gap-2 justify-center scale-90'
          onSubmit={handleSubmit}
        >
          <AvatarUploader onAvatarChange={handleAvatarChange} />
          <div className='grid gap-x-6 gap-y-2 md:grid-cols-2'>
            <Input
              isRequired={true}
              label='Name'
              placeholder='Slayther'
              id='nombre'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              isRequired={true}
              label='Last name'
              placeholder='Zamora'
              id='apellido'
              type='text'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              isRequired={true}
              label='Nickname'
              placeholder='Mr-Dudu'
              id='nickname'
              type='text'
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <Input
              isRequired={false}
              label='Phone number'
              placeholder='0987654321'
              id='celular'
              type='phone'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <Input
            isRequired={true}
            label='Email'
            placeholder='slayther.zr@gmail.com'
            id='correo'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            isRequired={true}
            label='Password'
            placeholder='********'
            id='contraseña'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            isRequired={true}
            label='Confirm password'
            placeholder='********'
            id='confirmar-contraseña'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className='flex items-start mb-2'>
            <div className='flex items-center h-5'>
              <input
                id='remember'
                type='checkbox'
                checked={isChecked}
                onChange={handleCheckboxChange}
                value=''
                className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                required
              />
            </div>
            <div className='flex items-center'>
              <label
                htmlFor='remember'
                className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                I agree with the
              </label>
              <span
                onClick={() => setIsTermsModalOpen(true)}
                className='ms-1 text-blue-600 hover:underline dark:text-blue-500 cursor-pointer'
              >
                terms and conditions
              </span>
              .
            </div>
          </div>

          <button
            type='submit'
            disabled={!isChecked && password !== confirmPassword}
            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-max mx-auto ${
              !isChecked ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Registrarse
          </button>
          <div className='flex gap-1 justify-center'>
            <span className='text-white text-sm'>
              Do you already have an account?
            </span>
            <Link to='/login' className='text-white italic underline text-sm'>
              Log in here
            </Link>
          </div>
        </form>
      </div>

      {/* <QuestionsModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
        questions={questions}
        onSave={handleSaveAnswers}
      />
      {isTermsModalOpen && (
        <div
          id='default-modal'
          aria-hidden='true'
          className='fixed inset-0 z-50 overflow-y-auto overflow-x-hidden justify-center items-center w-full h-full flex bg-gray-600 bg-opacity-50'
        >
          <div className='relative p-4 w-full max-w-2xl m-auto bg-white rounded-lg shadow dark:bg-gray-700'>
            <div className='flex items-center justify-between p-4 md:p-5 border-b dark:border-gray-600 rounded-t'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Terms of Service
              </h3>
              <button
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                onClick={handleCloseModal}
              >
                <svg
                  aria-hidden='true'
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>
            <div className='p-4 md:p-6 space-y-6'>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                ...
              </p>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                ...
              </p>
            </div>
            <div className='flex justify-end items-center p-4 md:p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
              <button
                data-modal-hide='default-modal'
                type='button'
                onClick={handleAccept}
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Accept
              </button>
              <button
                data-modal-hide='default-modal'
                type='button'
                onClick={handleCloseModal}
                className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600'
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};
