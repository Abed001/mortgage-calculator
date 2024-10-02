import React from 'react'
import Illustrationsvg from "./components/Illustrationsvg"
import Iconcalculator from "./components/Iconcalculator"

import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className='flex justify-center items-center w-full lg:h-[100vh]'>
      <div className=' bg-white lg:rounded-3xl flex justify-center items-center flex-col lg:flex-row w-full h-full lg:w-[60%] lg:h-[70%]  '>
        <div className='bg-white lg:rounded-3xl flex h-[100%] w-[100%] lg:w-[500px]'>
          <div className='border-radius w-[90%] flex flex-col mx-auto px-10 mt-10 lg:px-0 lg:mt-0 lg:py-5 '>
            <div className='flex flex-col lg:flex-row justify-between'>
              <p className='text-slate-800 font-bold'>Mortgage Calculator</p>
              <p className='font-semibold cursor-pointer underline text-[12px] text-slate-700'>Clear All</p>
            </div>

            <div className='mt-10 w-[100%]'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col '>
                  
                  <label className=' font-semibold text-[12px] text-slate-300 mb-2'>Mortgage Amount</label>
                  <div className='relative'>
                    <span className='z-10 absolute top-0 h-[35px] w-[50px] border-2 border-slate-700 border-r-0 bg-lime rounded-sm left-0 '></span>
                  <input className='-z-1 lg:mb-5'  {...register('mortgageAmount', { required: true })} />
                  {errors.mortgageAmount && <p> This field is required</p>}
                  </div>

                  <div className='flex flex-col lg:flex-row justify-center'>
                    <div className='flex flex-col w-[100%] lg:w-[50%]'>
                      <label className='font-semibold text-[12px] text-slate-300 mb-2'>Mortgage Term</label>
                      <input className='inputs lg:mr-5 '  {...register('mortgageTerm', { required: true })} />
                      {errors.mortgageTerm && <p>This field is required</p>}
                    </div>

                    <div className='flex flex-col w-[100%]  lg:w-[50%]'>
                      <label className='font-semibold text-[12px] text-slate-300 mb-2'>Interest Rate</label>
                      <input className='inputs' {...register('interestRate', { required: true })} />
                      {errors.interestRate && <p>This field is required</p>}
                    </div>
                  </div>
                </div>
                <div className='w-[100%] flex justify-center lg:justify-start'>
                  <button className='mb-10 cursor-pointer mt-10 bg-lime w-[80%] py-2 rounded-full text-slate-800 font-bold flex justify-center items-center gap-x-2 ' type="submit" ><Iconcalculator />Calculate Repayments</button>
                </div>
              </form>

            </div>
          </div>
        </div>
        <div className='p-10 pb-20 lg:pb-0 gap-y-5 lg:rounded-bl-[5rem] lg:rounded-tr-3xl lg:rounded-br-3xl bg-slate-800 flex flex-col justify-center items-center h-[100%]  w-[100%] lg:w-[500px]'>
          <Illustrationsvg />
          <h1 className='text-white font-bold'>Results shown here</h1>
          <p className='text-[12px] text-center text-slate-400'>Complete the form and click "calculate repayment"
            to see what your monthly  repayment would be.
          </p>
        </div>
      </div>
    </div >
  )
}

export default App
