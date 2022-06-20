import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ListContext from '../ContextApi/ListContext';

export default function Candidatelist(props) {
  let CandidateData = useContext(ListContext).candidateData;
  return (
    <>
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
