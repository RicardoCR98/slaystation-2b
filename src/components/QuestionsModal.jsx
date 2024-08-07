import { useState } from 'react';

export const QuestionsModal = ({ isOpen, onClose, questions, onSave }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      onSave(answers);
      onClose();
      setStep(0); // Reset to first step after closing
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[step] = e.target.value;
    setAnswers(newAnswers);
  };

  if (!isOpen || !questions || !questions[step]) return null;

  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center'>
      <div className='bg-white rounded-lg shadow dark:bg-gray-700 p-4 md:p-5 max-w-md w-full'>
        <div className='flex items-center justify-between border-b pb-4'>
          <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
            Security questions
          </h3>
          <button
            type='button'
            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
            onClick={onClose}
          >
            <svg
              className='w-3 h-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
              />
            </svg>
            <span className='sr-only'>Close modal</span>
          </button>
        </div>
        <div className='mt-4'>
          <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
            {questions[step].question_description}
          </p>
          <input
            type='text'
            value={answers[step] || ''} // Ensure a defined value to avoid the warning
            onChange={handleChange}
            className='w-full p-2 mt-2 border rounded-lg'
          />
        </div>
        <div className='flex items-center mt-4'>
          {step > 0 && (
            <button
              onClick={handlePrevious}
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            className='ms-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            {step < questions.length - 1 ? 'Next' : 'Finish'}
          </button>
        </div>
      </div>
    </div>
  );
};
