import React, { useRef, useEffect } from 'react'
import Illustrationsvg from "./components/Illustrationsvg"
import Iconcalculator from "./components/Iconcalculator"

import { useForm } from 'react-hook-form';

function App() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className='flex justify-center items-center w-full lg:h-[100vh]'>
      <div className=' bg-white lg:rounded-3xl flex justify-center items-center flex-col lg:flex-row w-full h-full lg:w-[60%] lg:h-[90%]  '>
        <div className='bg-white lg:rounded-3xl flex h-[100%] w-[100%] lg:w-[500px]'>
          <div className='border-radius w-[90%] flex flex-col mx-auto mt-10 lg:px-0 lg:mt-0 lg:py-5 '>
            <div className='flex flex-col lg:flex-row justify-between'>
              <p className='text-slate-800 font-bold text-[20px]'>Mortgage Calculator</p>
              <p className='font-semibold cursor-pointer underline text-[12px] text-slate-700'>Clear All</p>
            </div>

            <div className='mt-10 w-[100%] '>
              <form onSubmit={handleSubmit(onSubmit)}>

                <div className='flex flex-col '>
                  <label className=' font-semibold text-[12px] text-slate-300 mb-2'>Mortgage Amount</label>
                  <div className='flex'>
                    <div><p className="font-semibold text-slate-700 bg-slate-300 p-2 h-[50px] lg:h-[40px] flex justify-center items-center">$</p></div>
                    <div className='flex flex-col w-[100%] '>
                      <input className='lg:mb-2 w-[100%]' {...register('mortgageAmount', { required: true })} />
                      <div> {errors.mortgageAmount && <p className='text-[12px] -ml-[25px]'> This field is required</p>}</div>
                    </div>

                  </div>

                  <div className='w-[100%] mt-5 flex flex-col lg:flex-row justify-center lg:gap-x-5 items-center lg:justify-evenly '>
                    <div className='flex flex-col  w-[100%] lg:w-[50%] mb-5 lg:mb-0 '>
                      <label className='font-semibold text-[12px] text-slate-300 mb-2'>Mortgage Term</label>
                      <div className='flex'>
                        <input className='input-reverse w-[100%]' {...register('mortgageTerm', { required: true })} />
                        {errors.mortgageTerm && <p>This field is required</p>}
                        <div><p className="font-semibold text-slate-700 bg-slate-300 p-2 h-[50px] lg:h-[40px]">years</p></div>
                      </div>

                    </div>

                    <div className='flex flex-col w-[100%] lg:w-[50%]'>
                      <label className='font-semibold text-[12px] text-slate-300 mb-2'>Interest Rate</label>
                      <div className='flex'>
                        <input className='input-reverse  w-[100%]' {...register('interestRate', { required: true })} />
                        {errors.interestRate && <p>This field is required</p>}
                        <div><p className="font-semibold text-slate-700 bg-slate-300 p-2 h-[50px] lg:h-[40px]">%</p></div>
                      </div>

                    </div>

                  </div>
                  <div className=' flex flex-col mt-5  '>
                    <label className='font-semibold text-[12px] text-slate-300 mb-2'>Mortgage Type</label>

                    <div className='relative border-2 border-slate-300 rounded-sm h-[50px] lg:h-[40px]  p-2 flex justify-start items-center'>
                      <input className='inputs inputss w-6 ' type="radio" />
                      <p className='ml-2 font-bold text-slate-800'>Repayment</p></div>


                    <div className='relative mt-2 border-2 border-slate-300 rounded-sm h-[50px] lg:h-[40px]  p-2 flex justify-start items-center'>
                      <input className=' inputss inputs w-6' type="radio" />
                      <p className='ml-2 font-bold text-slate-800'>Interest Only</p></div>

                  </div>
                </div>
                <div className='w-[100%] flex justify-center lg:justify-start'>
                  <button className='mb-10 cursor-pointer mt-10 bg-lime w-[100%] lg:w-[80%] py-4 lg:py-2 rounded-full text-slate-800 font-bold flex justify-center items-center gap-x-2 ' type="submit" ><Iconcalculator />Calculate Repayments</button>
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
