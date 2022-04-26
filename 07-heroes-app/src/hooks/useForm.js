import { useState } from "react";

export const useForm = (initialFormState = {}) => {
  const [form, setForm] = useState(initialFormState);

  const reset = () => {
    setForm(initialFormState);
  };

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return [form, handleInputChange, reset];
};
