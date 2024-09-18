import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const ContactInfoPage = () => {
    const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();
    const [responseMessage, setResponseMessage] = useState('');
    const inputRefs = useRef([]);

    // Handle form submission
    const onSubmit = async (data) => {
        try {
            const response = await axios.post('https://my-portfolio-3-2ac0.onrender.com/api/contact', data);
            console.log(data);
            setResponseMessage(response.data.message);
            reset(); // Reset form after submission
        } catch (error) {
            setResponseMessage(error.response.data.message);
        }
    };

    // Array of form fields
    const formFields = [
        {
            id: 1,
            label: "What's your name?",
            name: 'name',
            type: 'text',
            placeholder: 'Your Name',
            validation: { required: true, minLength: 3 },
            errorMessage: 'Name is required (min 3 characters)',
        },
        {
            id: 2,
            label: "What's your email?",
            name: 'email',
            type: 'email',
            placeholder: 'name@gmail.com',
            validation: { required: true },
            errorMessage: 'Valid email is required',
        },
        {
            id: 3,
            label: "What's your organisation name?",
            name: 'organisation',
            type: 'text',
            placeholder: 'Your Organisation Name',
            validation: { required: true, minLength: 10 },
            errorMessage: 'Organisation must be at least 10 characters',
        },
        {
            id: 4,
            label: "What services are you looking for?",
            name: 'expectation',
            type: 'text',
            placeholder: 'Front_End, MERN Stack Development...',
            validation: { required: true, minLength: 10 },
            errorMessage: 'Expectation must be at least 10 characters',
        },
        {
            id: 5,
            label: "Your message",
            name: 'message',
            type: 'text',
            placeholder: 'Hey Naga, Can you help me with...',
            validation: { required: true, minLength: 10 },
            errorMessage: 'Message must be at least 10 characters',
        }
    ];

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus(); // Focus on the first input when component mounts
        }
    }, []);

    const handleKeyDown = async (index) => {
        const isValid = await trigger(formFields[index].name); // Trigger validation for the current field

        if (isValid && index < formFields.length - 1) {
            // Move to the next field if the current one is valid
            inputRefs.current[index + 1].focus();
        } else if (!isValid && index > 0) {
            // If not valid and user has skipped, focus on the previous invalid field
            for (let i = 0; i < index; i++) {
                const validPrevious = await trigger(formFields[i].name);
                if (!validPrevious) {
                    inputRefs.current[i].focus();
                    break;
                }
            }
        }
    };

    return (
        <main className='min-h-screen w-full flex'>
            <section className='h-full w-2/3 bg-[#1C1D20] pl-32'>
                {responseMessage && <p>{responseMessage}</p>}
                {/* Form */}
                <form action="/contact/data" onSubmit={handleSubmit(onSubmit)} method="POST">
                    {formFields.map((field, index) => (
                        <article key={field.id} className='h-[10vw] w-full py-[3vw] flex items-start justify-start gap-[5vw]'>
                            <header>
                                <h4>{`0${index + 1}`}</h4>
                            </header>
                            <section>
                                <h6 className='mb-4 text-2xl'>{field.label}</h6>
                                <input
                                    ref={(input) => (inputRefs.current[index] = input)}
                                    name={field.name}
                                    {...register(field.name, field.validation)}
                                    className='bg-transparent outline-none border-b-[1px] border-zinc-600 w-[40vw] focus:border-white transition duration-200'
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    required
                                    onBlur={() => handleKeyDown(index)} // Call handleKeyDown when the input loses focus
                                />
                                {errors[field.name] && <span className='text-red-500'>{field.errorMessage}</span>}
                            </section>
                        </article>
                    ))}
                    <footer className='h-[10vh] border-b-[1px] border-zinc-600 w-full relative my-[30vh]'>
                        <button className='absolute right-0 top-0 h-[10vw] w-[10vw] rounded-full bg-[#3498DB] flex items-center justify-center' type='submit'>
                            <h4 className='tracking-tight'>Send it!</h4>
                        </button>
                    </footer>
                </form>
            </section>
            <aside className='h-screen w-1/3 bg-[#1C1D20]'>
                <section className='px-[3vw] my-[2vw] h-[10vw] w-2/3 leading-[2vw]'>
                    <h4 className='my-2 text-xs text-zinc-500 font-semibold'>CONTACT DETAILS</h4>
                    <address>
                        <p>kannenagaamaresh12@gmail.com</p>
                        <p>+91 6 304 196 352</p>
                    </address>
                </section>
                <section className='px-[3vw] my-[2vw] h-[10vw] w-2/3 leading-[2vw]'>
                    <h4 className='my-2 text-xs text-zinc-500 font-semibold'>BUSINESS DETAILS</h4>
                    <address>
                        <p>Nagaamaresh.K</p>
                        <p>Location: Bengaluru</p>
                    </address>
                </section>
                <section className='px-[3vw] my-[2vw] h-[10vw] w-2/3 leading-[2vw]'>
                    <h4 className='my-2 text-xs text-zinc-500 font-semibold'>SOCIALS</h4>
                    <nav>
                        <Link className='my-2 block' to={"https://github.com/NagaAmaresh12"}>Github</Link>
                        <Link className='my-2 block' to={"https://www.linkedin.com/in/kanne-naga-amaresh-a16783279/"}>LinkedIn</Link>
                        <Link className='my-2 block' to={"https://www.naukri.com/mnjuser/profile?id=&altresid"}>Naukri</Link>
                    </nav>
                </section>
            </aside>
        </main>
    );
};

export default ContactInfoPage;
