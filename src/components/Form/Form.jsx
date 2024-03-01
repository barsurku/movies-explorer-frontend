import React, { useCallback } from "react";

export function useForms() {
  const [values, setValuesForms] = React.useState({});
  const [errors, setErrorsForms] = React.useState({});
  const [isValidForm, setIsValidForm] = React.useState(false);

  const handleChangeForm = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValuesForms({ ...values, [name]: value });
    setErrorsForms({ ...errors, [name]: target.validationMessage });
    setIsValidForm(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValuesForms = {}, newErrorForms = {}, newIsValidForm = false) => {
      setValuesForms(newValuesForms);
      setErrorsForms(newErrorForms);
      setIsValidForm(newIsValidForm);
    },
    [setValuesForms, setErrorsForms, setIsValidForm]
  );

  return {
    values,
    isValidForm,
    errors,
    setValuesForms,
    setIsValidForm,
    handleChangeForm,
    resetForm,
  };
}