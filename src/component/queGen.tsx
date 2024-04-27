"use client";
import { useEffect, useState } from "react";
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function QueGen() {
  
  const [que, setQue] = useState<any>(0);
  const [ans, setAns] = useState<any>(0);
  const [input, setInput] = useState<any>("");

  function randomQ() {
    const q1 = Math.floor(Math.random() * 100);
    const q2 = Math.floor(Math.random() * 100);
    const q3 = Math.floor(Math.random() * 100);

    const question = `Solve this equation ${q1} * ${q2} + ${q3}`;
    const answer = q1 * q2 + q3;
    setQue(question);
    setAns(answer);
  }
  const notify = () => {
    console.log('notify.....');
    
    
  }

  const handleSubmit = (e: any) => {

    e.preventDefault();
    if (input != ans) {
      notify();
      toast.error(`Your answer ${input} is InCorrect!`,  {
        position: "top-center",
        draggablePercent: 100,
      },);
     
    } else {
      randomQ();
      setInput('');
      toast.success(`Your answer ${input} is Correct!`, {
        position: "top-center",
        draggablePercent: 100,
      });
    }

   
  };

  const onChangeHandler = (e: any) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      setInput(e.target.value)
    }
  }

  useEffect(() => {
    randomQ();
  }, []);

  return (
    <div className="">
      <form onSubmit={handleSubmit} className=" border-gray-700 m-4 p-4">
        <h1 className="text-2xl font-bold">{que}</h1>
        <input
          style={styles.input}
          value={input}
          onChange={onChangeHandler }
        />
        <button
        style={input.length === 0
          ? styles.disabledButton : styles.enabledButton}
      disabled={input.length === 0}
        >Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
}




const styles = {
  container: {
      textAlign: 'center',
      margin: 'auto',
      padding: '20px',
  },
  heading: {
      fontSize: '34px',
      marginBottom: '10px',
      color: "green",
      borderBottom: "3px solid green",
      paddingBottom: 20,
      borderRadius: "8px",
  },
  input: {
      padding: '10px',
      marginBottom: '10px',
      width: '200px',
      borderRadius: 8,
      color: "black"
  },
  disabledButton: {
      backgroundColor: 'gray',
      color: 'white',
      cursor: 'not-allowed',
      margin: 10,
      padding: 15,
      borderRadius: "8px",
      border: "none",
      boxShadow: "0px 0px 10px 0px grey",
  },
  enabledButton: {
      backgroundColor: 'green',
      color: 'white',
      cursor: 'pointer',
      margin: 10,
      padding: 15,
      borderRadius: "8px",
      border: "none",
      boxShadow: "0px 0px 10px 0px grey",
  },
};

export default QueGen;
