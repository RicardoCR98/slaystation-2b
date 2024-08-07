import React from 'react';

export const Input = ({
  label,
  placeholder,
  id,
  type,
  isRequired,
  value,
  onChange,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
      >
        {label}
      </label>
      <input
        required={isRequired}
        autoComplete='off'
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      />
    </div>
  );
};
