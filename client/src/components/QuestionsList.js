import React, {useEffect, useState} from 'react';
import {getAllQuestions} from "../api/questions";
import styled from "styled-components";

const QuestionsList = () => {
    const [data, setSata] = useState([]);
    useEffect(() => {
        getAllQuestions().then(resp => setSata(resp))
    },[]);

    if (data.length === 0) return null;
    return (
        <>
            <h1 className="text-center">Запитання</h1>
            <Table>
                <tbody>
                {data.map(el => (<>
                    <tr>
                        <td>{el.name}</td>
                        <td rowSpan={3}>{el.question}</td>
                    </tr>
                    <tr><td>{el.phone}</td></tr>
                    <tr><td>{el.email}</td></tr>
                    <tr className="divider"/>
                </>))}
                </tbody>
            </Table>
        </>
    )
}

export default QuestionsList;

const Table = styled.table`
  border-collapse: collapse;
  margin: 20px auto;
  font-size: 1.3rem;
  td {
    padding: 5px;
    vertical-align: top;
    border: 1px double gray;
  }
  .divider {
    height: 2px;
  }
`;