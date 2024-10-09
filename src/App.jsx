import React, { useRef, useEffect, useState } from 'react'
import Illustrationsvg from "./components/Illustrationsvg"
import Iconcalculator from "./components/Iconcalculator"

import { useForm } from 'react-hook-form';

function App() {

  const { reset, register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const mortgageAmount = watch('mortgageAmount');
  const interestRate = watch('interestRate');
  const mortgageTerm = watch('mortgageTerm');
  const [repaymentType, setRepaymentType] = useState('repayment');
  const [clicked, setClicked] = useState(false);
  const [loanTerm, setLoanTerm] = useState(0);
  const [mortgageAmountFocused, setMortgageAmountFocused] = useState(false);
  const [mortgageTermFocused, setMortgageTermFocused] = useState(false);
  const [interestRateFocused, setInterestRateFocused] = useState(false);
  const [radioRepaymentFocused, setRadioRepaymentFocused] = useState(false);
  const [radioInterestFocused, setRadioInterestFocused] = useState(false);

  const handleRadioRepaymentFocus = () => {
    setRadioRepaymentFocused(true);
  };

  const handleRadioRepaymentBlur = () => {
    setRadioRepaymentFocused(false);
  };

  const handleRadioInterestFocus = () => {
    setRadioInterestFocused(true);
  };

  const handleRadioInterestBlur = () => {
    setRadioInterestFocused(false);
  };



  const handleMortgageAmountFocus = () => {
    setMortgageAmountFocused(true);
  };

  const handleMortgageAmountBlur = () => {
    setMortgageAmountFocused(false);
  };

  const handleMortgageTermFocus = () => {
    setMortgageTermFocused(true);
  };

  const handleMortgageTermBlur = () => {
    setMortgageTermFocused(false);
  };

  const handleInterestRateFocus = () => {
    setInterestRateFocused(true);
  };

  const handleInterestRateBlur = () => {
    setInterestRateFocused(false);
  };


  const toggleTrue = () => {
    setClicked(true);
  }

  const toggleFalse = () => {
    setClicked(false);
  }

  const calculateRepayment = () => {
    const principal = mortgageAmount;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfMonths = mortgageTerm * 12;

    const monthlyRepayment = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths) / (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
    return monthlyRepayment;

  };

  const calculateInterestOnly = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const interestOnlyPayment = mortgageAmount * monthlyInterestRate;
    return interestOnlyPayment;
  };



  return (
    <div className='flex justify-center items-center w-full lg:h-[100vh]'>
      <div className=' bg-white lg:rounded-3xl flex justify-center items-center flex-col lg:flex-row w-full h-full lg:w-[60%] lg:h-[90%]  '>
        <div className='bg-white lg:rounded-3xl flex h-[100%] w-[100%] lg:w-[500px]'>
          <div className='border-radius w-[90%] flex flex-col mx-auto mt-10 lg:px-0 lg:mt-0 lg:py-5 '>
            <div className='flex flex-col lg:flex-row justify-between'>
              <p className='text-slate-800 font-bold text-[20px] '>Mortgage Calculator</p>
              <button onClick={() => { toggleFalse(), reset() }} className=' text-left mt-2 font-semibold cursor-pointer underline text-[12px] text-slate-700'>Clear All</button>
            </div>

            <div className='mt-10 w-[100%] '>
              <form onSubmit={handleSubmit(onSubmit)}>

                <div className='flex flex-col '>
                  <label className=' font-semibold text-[12px] text-slate-300 mb-2'>Mortgage Amount</label>
                  <div className='flex'>
                    <div>
                      <p onFocus={handleMortgageAmountFocus}
                        onBlur={handleMortgageAmountBlur} style={{ backgroundColor: errors.mortgageAmount ? '#D97F7F' : mortgageAmountFocused ? '#B9D97F' : '#96B3B0' }} className="font-semibold text-slate-700  p-2 h-[50px] lg:h-[40px] flex justify-center items-center">$</p>
                    </div>
                    <div className='flex flex-col w-[100%] '>
                      <input
                        onFocus={handleMortgageAmountFocus}
                        onBlur={handleMortgageAmountBlur}
                        style={{
                          borderColor: errors.mortgageAmount ? '#D97F7F' : mortgageAmountFocused ? '#B9D97F' : '#96B3B0',
                        }}
                        type='number' step="any" className='lg:mb-2 w-[100%]' {...register('mortgageAmount', { required: true })} />
                      <div> {errors.mortgageAmount && <p style={{ color: errors.mortgageAmount ? '#D97F7F' : '' }} className='text-[12px] -ml-[25px] mt-2 font-semibold'> This field is required</p>}</div>
                    </div>

                  </div>

                  <div className='w-[100%] mt-5 flex flex-col lg:flex-row justify-center lg:gap-x-5 items-center lg:justify-evenly '>
                    <div className='flex flex-col  w-[100%] lg:w-[50%] mb-5 lg:mb-0 '>
                      <label className='font-semibold text-[12px] text-slate-300 mb-2'>Mortgage Term</label>
                      <div className='flex flex-col w-[100%] '>
                        <div className='flex'>
                          <input
                            onFocus={handleMortgageTermFocus}
                            onBlur={handleMortgageTermBlur}
                            style={{
                              borderColor: errors.mortgageTerm ? '#D97F7F' : mortgageTermFocused ? '#B9D97F' : '#96B3B0',
                            }} type='number' step="any" className='input-reverse w-[100%]'  {...register('mortgageTerm', { required: true })} onInput={(e) => setLoanTerm(parseInt(e.target.value))} />
                          <div>
                            <p onFocus={handleMortgageTermFocus}
                              onBlur={handleMortgageTermBlur} style={{ backgroundColor: errors.mortgageTerm ? '#D97F7F' : mortgageTermFocused ? '#B9D97F' : '#96B3B0' }} className="font-semibold text-slate-700 bg-slate-300 p-2 h-[50px] lg:h-[40px]">years</p>
                          </div>
                        </div>
                        <div> {errors.mortgageTerm && <p style={{ color: errors.mortgageTerm ? '#D97F7F' : '' }} className='text-[12px] -ml-[25px] pl-6 mt-2'> This field is required</p>}</div>
                      </div>

                    </div>

                    <div className='flex flex-col w-[100%] lg:w-[50%]'>
                      <label className='font-semibold text-[12px] text-slate-300 mb-2'>Interest Rate</label>
                      <div className='flex flex-col w-[100%] '>
                        <div className='flex'>
                          <input onFocus={handleInterestRateFocus}
                            onBlur={handleInterestRateBlur}
                            style={{
                              borderColor: errors.interestRate ? '#D97F7F' : interestRateFocused ? '#B9D97F' : '#96B3B0',
                            }} type='number' step="any" className='input-reverse w-[100%]' {...register('interestRate', { required: true })} />
                          <div>
                            <p onFocus={handleInterestRateFocus}
                              onBlur={handleInterestRateBlur} style={{ backgroundColor: errors.interestRate ? '#D97F7F' : interestRateFocused ? '#B9D97F' : '#96B3B0' }} className="font-semibold text-slate-700 bg-slate-300 p-2 h-[50px] lg:h-[40px]">%</p>
                          </div>
                        </div>
                        <div> {errors.interestRate && <p style={{ color: errors.interestRate ? '#D97F7F' : '' }} className='text-[12px] -ml-[25px] pl-6 mt-2'> This field is required</p>}</div>
                      </div>
                    </div>
                  </div>

                  <div className=' flex flex-col mt-5  '>
                    <label className='font-semibold text-[12px] text-slate-300 mb-2'>Mortgage Type</label>

                    <div onFocus={handleRadioRepaymentFocus}
                      onBlur={handleRadioRepaymentBlur} style={{
                        backgroundColor: radioRepaymentFocused ? '#B9D97F' : ''
                        , borderColor: radioRepaymentFocused ? '#FFFF40' : '#96B3B0'
                      }}
                      className='relative border-2 border-slate-300 rounded-sm h-[50px] lg:h-[40px]  p-2 flex justify-start items-center'>
                      <input className='inputs inputss w-6' type="radio" value="repayment" checked={repaymentType === 'repayment'} {...register('repaymentType')} onChange={() => setRepaymentType('repayment')} />
                      <p className='ml-2 font-bold text-slate-800'>Repayment</p></div>


                    <div onFocus={handleRadioInterestFocus}
                      onBlur={handleRadioInterestBlur} style={{
                        backgroundColor: radioInterestFocused ? '#B9D97F' : ''
                        , borderColor: radioInterestFocused ? '#FFFF40' : '#96B3B0'
                      }} className='relative mt-2 border-2 border-slate-300 rounded-sm h-[50px] lg:h-[40px]  p-2 flex justify-start items-center'>
                      <input className=' inputss inputs w-6' type="radio" value="interestOnly" checked={repaymentType === 'interestOnly'} {...register('repaymentType')} onChange={() => setRepaymentType('interestOnly')} />
                      <p className='ml-2 font-bold text-slate-800'>Interest Only</p></div>

                  </div>
                </div>
                <div className='w-[100%] flex justify-center lg:justify-start'>
                  <button onClick={() => {
                    if (repaymentType === 'repayment') {
                      console.log('Monthly Repayment:', calculateRepayment(), toggleTrue());
                    } else {
                      console.log('Interest Only Payment:', calculateInterestOnly(), toggleTrue());
                    }
                  }} className='mb-10 cursor-pointer mt-10 bg-lime w-[100%] lg:w-[80%] py-4 lg:py-2 rounded-full text-slate-800 font-bold flex justify-center items-center gap-x-2 ' type="submit" ><Iconcalculator />Calculate Repayments</button>
                </div>
              </form>

            </div>
          </div>
        </div>
        <div className='p-10 pb-20 lg:p-0 lg:py-6 lg:pb-0 lg:px-10  gap-y-5 lg:rounded-bl-[5rem] lg:rounded-tr-3xl lg:rounded-br-3xl bg-slate-800 flex flex-col justify-center items-center h-[100%]  w-[100%] lg:w-[500px]'>
          {!clicked ? (
            <>
              <Illustrationsvg />
              <h1 className='text-white font-bold'>Results shown here</h1>
              <p className='text-[12px] text-center text-slate-400'>Complete the form and click "calculate repayment"
                to see what your monthly  repayment would be.
              </p>
            </>) :
            (
              <div className='flex flex-col h-[100%] gap-y-5 items-center'>
                <h1 className='text-white mr-auto font-bold'>Your results</h1>
                <p className='text-slate-300 text-[12px]'>Your result are shown below based on the information you provided.
                  To adjust the results,edit the form and click "calculate repayment" again.
                </p>
                {/*card*/}
                <div className='bg-slate-950 gap-y-5 flex flex-col w-[100%] p-4 pb-10 border-t-4 border-lime rounded-md'>
                  <div className='border-b-[1px] border-slate-400'>
                    <p className='text-slate-400 text-[12px]'>Your monthly repayments</p>
                    <h1 className='text-lime font-bold text-[3rem] mb-5'>
                      {repaymentType === 'repayment' && <p>${calculateRepayment().toFixed(2)}</p>}
                      {repaymentType === 'interestOnly' && <p>${calculateInterestOnly().toFixed(2)}</p>}
                    </h1>
                  </div>
                  <div className='flex flex-col '>
                    <p className=' text-slate-400 text-[12px]'>Total you'll repay over the term</p>
                    <h1 className='text-white font-bold '>${(calculateRepayment() * loanTerm).toFixed(2)}</h1>
                  </div>
                </div>
              </div>
            )
          }

        </div>
      </div>
    </div >
  )
}

export default App
