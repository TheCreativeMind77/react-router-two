import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-green-700  h-[100vh]'>
        <div className=' bg-white max-w-sm py-6 px-6'>
            <h1 className='text-center text-green-600 font-bold mb-4'>Login form</h1>
            <form action="" className=' '>
                <input 
                    type='email' 
                    placeholder='saddam12503@gmail.com'
                    name='email' 
                    id='email'
                    className='w-full border border-gray-300 px-4 rounded py-1 mb-2 focus:ring-2 focus:ring-green-600' />
                <input 
                    type='password'
                    placeholder='password'
                    name="password"
                    id='password'
                    className='w-full border border-gray-300 px-4 rounded py-1 mb-2 focus:ring-2 focus:ring-green-600' /> 

            <button className='bg-green-600 hover:bg-green-700 py-2 w-full rounded text-white font-bold'>Login</button>
            </form>
            <div className='flex flex-col'>
                <button className='bg-red-500 py-2 px-2 rounded hover:bg-red-600 text-white cursor-pointer my-2'>login with Google</button>
                <button className='bg-gray-500 py-2 px-2 rounded hover:bg-gray-600 text-white cursor-pointer my-2'>login with Github</button>
            </div>
        </div>
    </div>
  )
}

export default Login