import React from 'react'
import Illustrationsvg from "./components/Illustrationsvg"
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className='flex justify-center items-center overflow-hidden w-full h-[100vh] '>
      <div className='bg-white lg:rounded-3xl flex flex-col lg:flex-row w-full h-full lg:w-[60%] lg:h-[70%] overflow-hidden justify-center items-center '>
        <div className='bg-white flex h-[100%] flex-1 border-4 '>
          <div className='px-10 py-5 w-[100%] flex flex-col border-4'>
            <div className='flex flex-col lg:flex-row justify-between'>
              <p className='text-slate-800 font-bold'>Mortgage Calculator</p>
              <p className='font-semibold cursor-pointer underline text-[12px] text-slate-700'>Clear All</p>
            </div>

            <div className='mt-10 w-[100%]'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col '>

                  <label className=' font-semibold text-[12px] text-slate-700 mb-2'>Mortgage Amount</label>
                  <input className='mb-5 h-10 w-[100%] border-[2px] border-slate-700 rounded-sm' defaultValue="test" {...register('mortgageAmount', { required: true })} />
                  {errors.mortgageAmount && <p> This field is required</p>}

                  <div className='flex flex-col lg:flex-row justify-start'>
                    <div className='flex flex-col w-[100%]'>
                      <label className='font-semibold text-[12px] text-slate-700 mb-2'>Mortgage Term</label>
                      <input className='h-10 mr-5  border-[2px] border-slate-700 rounded-sm' defaultValue="test" {...register('mortgageTerm', { required: true })} />
                      {errors.lastName && <p>This field is required</p>}
                    </div>

                    <div className='flex flex-col  w-[100%]'>
                      <label className='font-semibold text-[12px] text-slate-700 mb-2'>Interest Rate</label>
                      <input className=' h-10  border-[2px] border-slate-700 rounded-sm' defaultValue="test" {...register('interestRate', { required: true })} />
                      {errors.lastName && <p>This field is required</p>}
                    </div>
                  </div>
                </div>
                <input className='cursor-pointer mt-10 ' type="submit" />
              </form>

            </div>
          </div>
        </div>
        <div className='p-10 gap-y-5 lg:rounded-bl-[5rem] bg-slate-800 flex flex-col justify-center items-center h-[100%] flex-1 '>
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
