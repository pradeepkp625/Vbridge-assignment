import { CircularProgress, TextField } from '@material-ui/core';
import { Alert } from '@mui/material';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../Common/Button';
import CustomInput from '../Common/CustomInput';
import ListContext from '../ContextApi/ListContext';

export default function ContentComponent() {
  const context = useContext(ListContext);
  let { id } = useParams();
  const [isOpen, setisOpen] = useState(false);
  const [isLoad, setisLoad] = useState(false);
  const [name, setname] = useState('');
  const [experience, setexperience] = useState('');
  const [resume, setresume] = useState(null);
  const [isTitleError, setisTitleError] = useState(null);
  const [isDescError, setisDescError] = useState(null);
  const [isSkillError, setisSkillError] = useState(null);
  const [fileName, setfileName] = useState(null);
  const [isSuccess, setisSuccess] = useState(false);
  const [CandidateData, setCandidateData] = useState([]);

  let filter = context.userData.filter((item) => item.id === id);
  function onSubmit() {
    if (!name) {
      setisTitleError('This field is Required (*)');
      return;
    }
    if (!experience) {
      setisDescError('This field is Required (*)');
      return;
    }
    if (!resume) {
      setisSkillError('This field is Required (*)');
      return;
    }
    setisLoad(true);
    // Api call goes here
    
    setTimeout(() => {
      let data = [
        {
          name: name,
          experience: experience,
          fileName: fileName,
        },
      ];
      setCandidateData([...CandidateData, data]);
      context.setCandidateDatacall(data)
      setname('');
      setisOpen(false);
      setexperience('');
      setresume('');
      setisLoad(false);
      setisSuccess(true);
    }, 1000);
  }
  function onChangeName(e) {
    setisTitleError('');
    setname(e.target.value);
  }
  function onChangeExpirirnce(e) {
    setisDescError('');
    setexperience(e.target.value);
  }
  function onChangeResume(e) {
    setisSkillError('');
    setfileName(e.target.files[0].name);
    setresume(e.target.value);
  }
  return context.userData.legth != 0 ? (
    <>
      <div className="list__wrapper12">
        {filter?.map((item) => (
          <div className="list__container12" key={item.id}>
            <div className="add__condidate" onClick={() => setisOpen(true)}>
              Add condidate
            </div>
            <div className="list__avatar">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3095/3095221.png"
                alt="avatar"
              />
            </div>
            <div className="list__details">
              <h2 className="job__title12">{item.jobTitle}</h2>
              <p className="list__description12">{item.jobDesc}</p>
              <div className="list__skilss12">
                <br />
                {item.jobSkills.map((item) => (
                  <span className="list__skill-bubles12">{item.title}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
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
      </div>

      <div className="form__addResourse">
        {isOpen ? (
          <div className="popup__form">
            <div className="form__wrapper-addUser">
              <div className="form__container">
                <div className="close__btn" onClick={() => setisOpen(false)}>
                  X
                </div>
                <div className="form__heading">Add Candidate</div>
                <CustomInput
                  onChange={onChangeName}
                  value={name}
                  label={'Name'}
                  onError={isTitleError}
                />
                <CustomInput
                  onChange={onChangeExpirirnce}
                  value={experience}
                  label={'Experience'}
                  onError={isDescError}
                />
                <div className="file__container">
                <input
                  type={'file'}
                  onChange={onChangeResume}
                  value={resume}
                />
                {isSkillError?<p className="errorMsg">{isSkillError}</p>:null}
                </div>
                {isLoad ? (
                  <div className="submit__loader">
                    <CircularProgress />
                  </div>
                ) : (
                  <>
                    <Button onClick={onSubmit} label={'Add Candidate'} />
                    {isSuccess ? (
                      <Alert severity="success">
                        Candidate added succesfullys please Check in Candidate List
                      </Alert>
                    ) : null}
                  </>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  ) : (
    <div className="not__found">
      <br />
      <center>Not found any Job descriptions please add and check..!</center>
    </div>
  );
}
