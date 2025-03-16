'use client';

import type React from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+84) 339 693 893',
    href: 'tel:+84339693893',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'kiennguyen.dev.2003@gmail.com',
    href: 'mailto:kiennguyen.dev.2003@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Tan Binh District, Ho Chi Minh city',
    href: 'https://maps.google.com/?q=Tan+Binh+District,+Ho+Chi+Minh+city',
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailParams = {
      to_email: 'kiennguyen.dev.2003@gmail.com', // Your email
      reply_to: formState.email, // User's email
      firstname: formState.firstname,
      lastname: formState.lastname,
      email: formState.email, // Still included if needed
      phone: formState.phone,
      service: formState.service,
      message: formState.message,
      date: new Date().toLocaleString(),
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        emailParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        alert('Message sent successfully!');
        setIsSubmitting(false);
        setFormState({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      })
      .catch((error: any) => {
        console.error('Error sending message:', error);
        alert('Failed to send message.');
        setIsSubmitting(false);
      });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
      className='py-16 px-4 sm:px-6 min-h-screen flex items-center bg-black'
    >
      <div className='container mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Get in <span className='text-green-500'>Touch</span>
          </h1>
          <p className='text-white/60 max-w-2xl mx-auto'>
            Have a project in mind or want to discuss potential opportunities?
            I&apos;m always open to new ideas and collaborations.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 xl:grid-cols-5 gap-10 items-start'>
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='xl:col-span-2 order-2 xl:order-1'
          >
            <div className='bg-gradient-to-br from-[#1a1a1f] to-[#27272c] p-8 rounded-2xl border border-green-500/10 shadow-lg'>
              <motion.h2
                variants={itemVariants}
                className='text-2xl font-bold mb-6 text-white'
              >
                Contact Information
              </motion.h2>

              <ul className='space-y-6'>
                {info.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className='flex items-center gap-4 group'
                  >
                    <div className='w-14 h-14 bg-black/40 text-green-500 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-green-500/10 transition-all duration-300'>
                      <div className='text-2xl'>{item.icon}</div>
                    </div>
                    <a
                      href={item.href}
                      target={item.title === 'Address' ? '_blank' : undefined}
                      rel={
                        item.title === 'Address'
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className='flex-1 group-hover:text-green-500 transition-colors duration-300'
                    >
                      <p className='text-white/50 text-sm'>{item.title}</p>
                      <h3 className='text-lg font-medium'>
                        {item.description}
                      </h3>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                variants={itemVariants}
                className='mt-10 pt-6 border-t border-white/10'
              >
                <h3 className='text-lg font-medium mb-3'>Connect with me</h3>
                <p className='text-white/60 mb-4'>
                  Follow me on social media to see my latest projects and
                  updates.
                </p>
                <div className='flex gap-3'>
                  {['GitHub', 'LinkedIn', 'Twitter'].map((platform, index) => (
                    <motion.a
                      key={index}
                      href='#'
                      whileHover={{ y: -3 }}
                      className='px-4 py-2 bg-black/40 rounded-lg text-white/80 hover:text-green-500 hover:bg-black/60 transition-all duration-300'
                    >
                      {platform}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className='xl:col-span-3 order-1 xl:order-2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className='bg-gradient-to-br from-[#1a1a1f] to-[#27272c] p-8 rounded-2xl border border-green-500/10 shadow-lg'
            >
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-1.5 h-8 bg-green-500 rounded-full'></div>
                <h2 className='text-2xl font-bold'>Let&apos;s work together</h2>
              </div>

              <p className='text-white/60 mb-8'>
                Fill out the form below with your project details, and I&apos;ll
                get back to you as soon as possible.
              </p>

              {/* Input fields */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                <div className='space-y-2'>
                  <label
                    htmlFor='firstname'
                    className='text-sm text-white/70 block'
                  >
                    First Name
                  </label>
                  <Input
                    id='firstname'
                    name='firstname'
                    value={formState.firstname}
                    onChange={handleChange}
                    placeholder='John'
                    className='bg-black/30 border-white/10 focus:border-green-500 h-12 rounded-xl transition-all duration-300'
                  />
                </div>

                <div className='space-y-2'>
                  <label
                    htmlFor='lastname'
                    className='text-sm text-white/70 block'
                  >
                    Last Name
                  </label>
                  <Input
                    id='lastname'
                    name='lastname'
                    value={formState.lastname}
                    onChange={handleChange}
                    placeholder='Doe'
                    className='bg-black/30 border-white/10 focus:border-green-500 h-12 rounded-xl transition-all duration-300'
                  />
                </div>

                <div className='space-y-2'>
                  <label
                    htmlFor='email'
                    className='text-sm text-white/70 block'
                  >
                    Email Address
                  </label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    value={formState.email}
                    onChange={handleChange}
                    placeholder='john.doe@example.com'
                    className='bg-black/30 border-white/10 focus:border-green-500 h-12 rounded-xl transition-all duration-300'
                  />
                </div>

                <div className='space-y-2'>
                  <label
                    htmlFor='phone'
                    className='text-sm text-white/70 block'
                  >
                    Phone Number
                  </label>
                  <Input
                    id='phone'
                    name='phone'
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder='(+84) 123 456 789'
                    className='bg-black/30 border-white/10 focus:border-green-500 h-12 rounded-xl transition-all duration-300'
                  />
                </div>
              </div>

              {/* Select */}
              <div className='mb-6 space-y-2'>
                <label
                  htmlFor='service'
                  className='text-sm text-white/70 block'
                >
                  Service Required
                </label>
                <Select
                  onValueChange={handleSelectChange}
                  value={formState.service}
                >
                  <SelectTrigger
                    id='service'
                    className='bg-black/30 border-white/10 focus:border-green-500 h-12 rounded-xl transition-all duration-300'
                  >
                    <SelectValue placeholder='Select a service' />
                  </SelectTrigger>
                  <SelectContent className='bg-[#27272c] border-white/10'>
                    <SelectGroup>
                      <SelectLabel>Select a position</SelectLabel>
                      <SelectItem value='frontend'>
                        Software Engineer (Front end)
                      </SelectItem>
                      <SelectItem value='mobile'>
                        Mobile Developer (React Native)
                      </SelectItem>
                      <SelectItem value='fullstack'>
                        Full Stack Developer
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Textarea */}
              <div className='mb-8 space-y-2'>
                <label
                  htmlFor='message'
                  className='text-sm text-white/70 block'
                >
                  Your Message
                </label>
                <Textarea
                  id='message'
                  name='message'
                  value={formState.message}
                  onChange={handleChange}
                  className='min-h-[180px] bg-black/30 border-white/10 focus:border-green-500 rounded-xl transition-all duration-300'
                  placeholder='Describe your project or inquiry in detail...'
                />
              </div>

              {/* Submit Button */}
              <Button
                type='submit'
                disabled={isSubmitting}
                className='px-8 py-6 h-auto bg-green-600 hover:bg-green-500 text-black font-medium rounded-xl transition-all duration-300 shadow-lg shadow-green-600/20 hover:shadow-green-500/30 flex items-center gap-2'
              >
                {isSubmitting ? (
                  <>
                    <span className='w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin'></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
