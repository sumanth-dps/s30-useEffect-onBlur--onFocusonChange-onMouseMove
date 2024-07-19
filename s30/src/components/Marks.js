import React, { useEffect } from "react";
import { useRef } from "react";

function Marks() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let sanInputRef = useRef();
  let m1aInputRef = useRef();
  let engInputRef = useRef();
  let m1bInputRef = useRef();
  let phyInputRef = useRef();
  let cheInputRef = useRef();
  let resultParaRef = useRef();
  let firstNameResultRef = useRef();
  let lastNameResultRef = useRef();
  let sanResultRef = useRef();
  let m1aResultRef = useRef();
  let engResultRef = useRef();
  let m1bResultRef = useRef();
  let phyResultRef = useRef();
  let cheResultRef = useRef();
  useEffect(() => {
    alert("Welcome, Calculate your marks..😊 ");
  });

  return (
    <div>
      <form>
        <div>
          <h4 className="title">Inter 1st year marks calculator</h4>
          <label>First name</label>
          <input
            ref={firstNameInputRef}
            onFocus={() => {
              firstNameInputRef.current.style.backgroundColor = "burlywood";
            }}
            onBlur={() => {
              firstNameInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <span ref={firstNameResultRef}></span>
        </div>
        <div>
          <label>Last name</label>
          <input
            ref={lastNameInputRef}
            onFocus={() => {
              lastNameInputRef.current.style.backgroundColor = "burlywood";
            }}
            onBlur={() => {
              lastNameInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <span ref={lastNameResultRef}></span>
        </div>
        <div>
          <label>Sanskrit</label>
          <input
            type="number"
            ref={sanInputRef}
            onFocus={() => {
              sanInputRef.current.style.backgroundColor = "burlywood";
            }}
            onChange={() => {
              sanResultRef.current.innerHTML =
                sanInputRef.current.value >= 101
                  ? "Invalid"
                  : sanInputRef.current.value >= 35
                  ? "👍"
                  : "👎";
              sanResultRef.current.style.backgroundColor =
                sanInputRef.current.value >= 101
                  ? "orange"
                  : sanInputRef.current.value >= 35
                  ? "green"
                  : "red";
            }}
            onBlur={() => {
              sanInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <span ref={sanResultRef}></span>
        </div>
        <div>
          <label>English</label>
          <input
            type="number"
            ref={engInputRef}
            onMouseMove={() => {
              engInputRef.current.style.backgroundColor = "burlywood";
            }}
            onChange={() => {
              engResultRef.current.innerHTML =
                engInputRef.current.value >= 101
                  ? "Invalid"
                  : engInputRef.current.value >= 35
                  ? "Pass"
                  : "Fail";
              engResultRef.current.style.color =
                engInputRef.current.value >= 101
                  ? "orange"
                  : engInputRef.current.value >= 35
                  ? "green"
                  : "red";
            }}
            onBlur={() => {
              engInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <span ref={engResultRef}></span>
        </div>
        <div>
          <label>M1 A</label>
          <input
            type="number"
            ref={m1aInputRef}
            onFocus={() => {
              m1aInputRef.current.style.backgroundColor = "burlywood";
            }}
            onChange={() => {
              m1aResultRef.current.innerHTML =
                m1aInputRef.current.value >= 76
                  ? "Invalid"
                  : m1aInputRef.current.value >= 26
                  ? "Pass"
                  : "Fail";
              m1aResultRef.current.style.backgroundColor =
                m1aInputRef.current.value >= 76
                  ? "orange"
                  : m1aInputRef.current.value >= 26
                  ? "green"
                  : "red";
            }}
            onBlur={() => {
              m1aInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <span ref={m1aResultRef}></span>
        </div>
        <div>
          <label>M1 B</label>
          <input
            type="number"
            ref={m1bInputRef}
            onFocus={() => {
              m1bInputRef.current.style.backgroundColor = "burlywood";
            }}
            onChange={() => {
              m1bResultRef.current.innerHTML =
                m1bInputRef.current.value >= 76
                  ? "Invalid"
                  : m1bInputRef.current.value >= 26
                  ? "😎"
                  : "😞";
              m1bResultRef.current.style.color =
                m1bInputRef.current.value >= 76
                  ? "orange"
                  : m1bInputRef.current.value >= 26
                  ? "green"
                  : "red";
            }}
            onBlur={() => {
              m1bInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <span ref={m1bResultRef}></span>
        </div>
        <div>
          <label>Physics</label>
          <input
            type="number"
            ref={phyInputRef}
            onFocus={() => {
              phyInputRef.current.style.backgroundColor = "burlywood";
            }}
            onChange={() => {
              phyResultRef.current.innerHTML =
                phyInputRef.current.value >= 61
                  ? "Invalid"
                  : phyInputRef.current.value >= 21
                  ? "Pass"
                  : "Fail";
              phyResultRef.current.style.backgroundColor =
                phyInputRef.current.value >= 61
                  ? "orange"
                  : phyInputRef.current.value >= 21
                  ? "green"
                  : "red";
            }}
            onBlur={() => {
              phyInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <span ref={phyResultRef}></span>
        </div>
        <div>
          <label>Chemistry</label>
          <input
            type="number"
            ref={cheInputRef}
            onFocus={() => {
              cheInputRef.current.style.backgroundColor = "burlywood";
            }}
            onChange={() => {
              cheResultRef.current.innerHTML =
                cheInputRef.current.value >= 61
                  ? "Invalid"
                  : cheInputRef.current.value >= 21
                  ? "Pass"
                  : "Fail";
              cheResultRef.current.style.color =
                cheInputRef.current.value >= 61
                  ? "orange"
                  : cheInputRef.current.value >= 21
                  ? "green"
                  : "red";
            }}
            onBlur={() => {
              cheInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <span ref={cheResultRef}></span>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let firstName = firstNameInputRef.current.value;
              let lastName = lastNameInputRef.current.value;
              let sanMarks = Number(sanInputRef.current.value);
              let engMarks = Number(engInputRef.current.value);
              let m1aMarks = Number(m1aInputRef.current.value);
              let m1bMarks = Number(m1bInputRef.current.value);
              let phyMarks = Number(phyInputRef.current.value);
              let cheMarks = Number(cheInputRef.current.value);
              let total =
                sanMarks + engMarks + m1aMarks + m1bMarks + phyMarks + cheMarks;
              alert(`Total Marks are : ${total}`);
              resultParaRef.current.innerHTML = `Total marks of ${firstName} ${lastName} are  : ${total}`;
              console.log(total);
            }}
          >
            Calculate Result
          </button>
        </div>
        <p
          ref={resultParaRef}
          onMouseMove={() => {
            resultParaRef.current.style.color = "green";
          }}
        >
          Please enter values and click Calculate
        </p>
      </form>
    </div>
  );
}
export default Marks;
