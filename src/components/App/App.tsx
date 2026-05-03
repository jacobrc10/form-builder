import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import heroImg from '/hero.png'
import FormRenderer from '../FormRenderer/FormRenderer'
import { formFields } from '../../constants/formFieldData'
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
          <h1>Form Builder</h1>
          <h2>Testing hot reload</h2>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
          <h2>Form Fields</h2>
          <FormRenderer fields={formFields} />
        </div>
      </section>
    </>
  )
}

export default App
