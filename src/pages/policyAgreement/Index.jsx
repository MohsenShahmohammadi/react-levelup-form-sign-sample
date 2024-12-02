import React, { useRef, useState } from "react";
import HeaderTitle from "../../components/headerTitle/Index";
import "./index.css";
import Button from "../../components/button/Index";

const PolicyAgreement = ({ fullName, dateReg, onPressHandler }) => {
  const [answerState, setAnswerState] = useState(false);

  const AnswerStateHandler = () => {
    setAnswerState(!answerState);
  };
  const buttonHandler = () => {
    answerState
      ? onPressHandler()
      : alert("Please read and agreed our policy agreement");
  };
  return (
    <>
      <div className="container">
        <div className="header-container">
          <div className="input-Group-inline">
            <p>Full Name:</p>
            <HeaderTitle text={fullName} />
          </div>
          <div className="input-Group-inline">
            <p>Date:</p>
            <HeaderTitle text={dateReg} />
          </div>
        </div>
        <p className="content">
          Aliqua nostrud cupidatat id consequat incididunt ad elit consequat
          quis. Magna dolore in sit exercitation occaecat ea aute laboris
          nostrud ea deserunt excepteur qui exercitation. Esse minim dolor
          ullamco est esse occaecat eu in enim reprehenderit velit est sint.
          Enim ut velit voluptate ea fugiat mollit incididunt irure veniam.
          Deserunt culpa consectetur excepteur incididunt ullamco cillum Lorem
          commodo cupidatat elit. Excepteur magna consectetur excepteur
          cupidatat esse pariatur minim sint. Et minim voluptate culpa
          consectetur ipsum exercitation minim aute do mollit fugiat culpa.
          Nostrud quis duis deserunt veniam enim irure minim commodo est mollit
          dolor nulla aliquip. Occaecat fugiat veniam ex excepteur excepteur ut
          aute ex cillum amet in culpa laboris quis. Reprehenderit labore ipsum
          cillum magna laboris proident ipsum quis velit id minim id. Proident
          non proident do elit laborum eu. Voluptate aliqua nisi ut nulla mollit
          ut aute veniam cupidatat voluptate ullamco tempor nostrud laborum.
          Elit aute id commodo adipisicing Lorem eiusmod voluptate proident
          magna eiusmod qui non fugiat ullamco. Minim duis in velit proident.
          Velit cupidatat mollit laboris reprehenderit ad cupidatat elit eu.
          Enim exercitation tempor labore nostrud quis adipisicing fugiat ea
          consectetur irure fugiat consectetur ex. Laboris pariatur eiusmod
          exercitation laboris consectetur tempor excepteur voluptate in laborum
          eiusmod culpa. Laboris laborum esse labore minim enim voluptate nisi
          veniam in commodo do. Aliquip anim aute cillum veniam. Non cillum
          ullamco do mollit excepteur consequat adipisicing et sit adipisicing
          est magna. In sint ea cillum sit. Esse ullamco occaecat amet
          exercitation tempor proident nulla dolore sint in voluptate. Anim sint
          nulla ad non nulla proident excepteur nulla nisi ut occaecat dolor. Id
          do magna amet cupidatat fugiat minim. Anim est quis do cillum ullamco
          anim dolor excepteur laboris tempor excepteur. Ea ullamco dolore
          consectetur non adipisicing laboris laborum magna est. Officia commodo
          proident culpa fugiat veniam dolore ex pariatur voluptate laboris
          ipsum minim dolor magna. Irure labore pariatur ex occaecat aute
          laboris aliqua anim aliqua officia id cupidatat qui. Nisi officia
          tempor amet tempor dolor reprehenderit. Ullamco anim reprehenderit qui
          aute. Cupidatat consequat tempor cillum laboris eiusmod ut elit
          proident cillum sunt et incididunt quis Lorem. Nostrud ullamco ut
          ullamco exercitation velit fugiat deserunt ex do magna Lorem labore
          adipisicing cillum. Dolore fugiat dolor non cupidatat. Deserunt
          consectetur magna amet elit irure cillum incididunt nisi mollit
          pariatur deserunt proident do cupidatat. Excepteur culpa magna magna
          consequat proident cupidatat Lorem velit culpa ut velit proident
          cillum. Eu dolor nisi cupidatat magna irure. Id dolor id ut dolor
          pariatur id deserunt. Adipisicing non fugiat veniam laboris.
          Consectetur sint pariatur quis aliquip esse. Laboris consectetur ad
          culpa pariatur sit tempor excepteur. Ad enim ullamco do minim pariatur
          laboris. Eiusmod commodo nulla et dolor aute ea do et consequat. Est
          eu commodo mollit minim ut proident eiusmod veniam commodo deserunt
          non eu magna exercitation. Sit labore veniam pariatur id voluptate ad
          enim Lorem est et est. Aliqua laboris exercitation reprehenderit quis.
          Incididunt eiusmod nulla cupidatat fugiat. Et et enim sunt labore anim
          irure eiusmod aliqua. Nisi adipisicing exercitation nulla mollit
          nostrud elit aute qui enim enim eu.
        </p>
        <div className="input-Group-inline checkbox-group">
          <input type="checkbox" onChange={AnswerStateHandler} />
          <p>I agree with Policy</p>
        </div>
        <Button
          title="Accept"
          cClass="btn btn-success"
          onPress={() => buttonHandler()}
        />
      </div>
    </>
  );
};

export default PolicyAgreement;
