import { createContext, useContext, useState } from "react";

export const MyContext = createContext("");

export const ContextProvider = ({ children }) => {
    const [radioRepaymentFocused, setRadioRepaymentFocused] = useState(false);
    const [radioInterestFocused, setRadioInterestFocused] = useState(false);
    const [mortgageAmountFocused, setMortgageAmountFocused] = useState(false);
    const [mortgageTermFocused, setMortgageTermFocused] = useState(false);
    const [interestRateFocused, setInterestRateFocused] = useState(false);
    const [repaymentType, setRepaymentType] = useState('repayment');
    const [clicked, setClicked] = useState(false);

    const toggleTrue = () => {
        setClicked(true);
    }

    const toggleFalse = () => {
        setClicked(false);
    }

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
    const handleRadioInterestFocus = () => {
        setRadioInterestFocused(true);
    };

    const handleRadioInterestBlur = () => {
        setRadioInterestFocused(false);
    };

    const handleRadioRepaymentFocus = () => {
        setRadioRepaymentFocused(true);
    };

    const handleRadioRepaymentBlur = () => {
        setRadioRepaymentFocused(false);
    };

    return (
        <MyContext.Provider value={{
            radioRepaymentFocused,
            handleRadioRepaymentFocus,
            handleRadioRepaymentBlur,
            radioInterestFocused,
            handleRadioInterestFocus,
            handleRadioInterestBlur,
            mortgageAmountFocused,
            mortgageTermFocused,
            interestRateFocused,
            handleMortgageAmountFocus,
            handleMortgageAmountBlur,
            handleMortgageTermFocus,
            handleMortgageTermBlur,
            handleInterestRateFocus,
            handleInterestRateBlur,
            repaymentType,
            clicked,
            toggleTrue,
            toggleFalse
        }}>
            {children}
        </MyContext.Provider>
    )
}

export const useCalculatorContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error("useContext must be called within the Provider.");
    }
    return context;
};
