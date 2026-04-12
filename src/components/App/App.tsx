import { useState } from 'react'
import reactLogo from '../../../public/react.svg'
import viteLogo from '../../../public/vite.svg'
import heroImg from '../../../public/hero.png'
import { formFields } from '../../constants/formFieldData'
import Field from '../Field/Field'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <h2>Testing hot reload</h2>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
          <h2>Form Fields</h2>
          <ul>
            {formFields.map((field) => (
              <Field key={field.id} {...field} />
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default App
