import { type } from 'os';
import React from 'react';

interface StudentsInfo {
  name: string;
  grade: number;
  part?: string; // 있어도 되고 없어도 되는 props
  handleClick: (name: string, grade: number) => void;
}

// type StudentsInfo {
//   name: string;
//   grade: number;
// }

// FC: functional component
// React.FC 를 사용할 때는 Generic을 이용해서 props 타입을 표현
// const Student: React.FC<StudentsInfo> = ({ name, grade }) => {
//   return (
//     <div>
//       <li>이름: {name}</li>
//       <li>학년: {grade}</li>
//     </div>
//   );
// };
const Student = ({ name, grade, part, handleClick }: StudentsInfo) => {
  return (
    <div onClick={() => handleClick(name, grade)}>
      <li>이름: {name}</li>
      <li>학년: {grade}</li>
      <li>전공: {part || '자유전공'} </li>
    </div>
  );
};

export default Student;
