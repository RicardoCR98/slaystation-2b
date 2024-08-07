import React, { useState } from 'react';

export const AvatarUploader = ({ onAvatarChange }) => {
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
        onAvatarChange(e.target.result); // Pasar el avatar al componente padre
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <label
        className='cursor-pointer block mb-1 text-sm font-medium text-gray-900 dark:text-white'
        htmlFor='avatar'
      >
        Select a profile picture
        <div className='w-20 h-20 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center mt-1 mx-auto'>
          {
            avatar ? (
              <img
                src={avatar}
                alt='Avatar'
                className='w-full h-full object-cover'
              />
            ) : null /* No se muestra nada si no hay avatar */
          }
        </div>
      </label>
      <input
        id='avatar'
        type='file'
        accept='image/*'
        onChange={handleAvatarChange}
        className='text-white mt-1'
        hidden
      />
    </div>
  );
};
