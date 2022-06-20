import { useContext } from 'react';
import ListContext from '../ContextApi/ListContext';

export default function Candidatelist(props) {
  let CandidateData = useContext(ListContext).candidateData;
  return (
    <>
      <center>
        <br />
        <h1>Candidate List</h1>
      </center>
      <div className="mui__table">
        <table>
          <tr>
            <th>Name</th>
            <th>Expirience</th>
            <th>Resume</th>
          </tr>
          {CandidateData.map((item) => (
            <tr>
              <td>{item[0].name}</td>
              <td>{item[0].experience}</td>
              <td>{item[0].fileName}</td>
            </tr>
          ))}
          <tr></tr>
        </table>
      </div>
    </>
  );
}
