import { useState } from 'react';

const useForm = (callback) => {
    const [values, setValues] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        e.persist();
        callback(values);
        e.target.reset();
    }

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    }

    return [
        handleSubmit,
        handleChange,
        values
    ]
}

export default useForm;