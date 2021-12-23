import React from "react";
import PropTypes from "prop-types";

const PersonalInfo = function PersonalInfo({ toogleModal }) {
  return (
    <div id="myModal" className="modal">
      <div className="modal__container">
        <div className="modal__content">
          <div className="modal__content__close">
            <span
              className="modal__content__close__button"
              onClick={toogleModal}
              aria-hidden="true"
            >
              &times;
            </span>
          </div>

          <table>
            <tbody>
              <tr>
                <td>Nombre:&nbsp;</td>
                <td>Henry Aurelio Aymara Apaza</td>
              </tr>
              <tr>
                <td>Descripción:&nbsp;</td>
                <td>Me gusta programar y aprender algo nuevo cada día</td>
              </tr>
              <tr>
                <td>Cosas que he aprendido en el programa:&nbsp;</td>
                <td>
                  <ul>
                    <li>- React desde cero</li>
                    <li>- Metodología BEM</li>
                    <li>- Javascript desde lo básico</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Correo:&nbsp;</td>
                <td>henrys4hgb@gmail.com</td>
              </tr>
              <tr>
                <td>Link a github:&nbsp;</td>
                <td>
                  <a href="https://github.com/henryapz" target="_blank" rel="noreferrer">
                    https://github.com/henryapz
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

PersonalInfo.propTypes = {
  toogleModal: PropTypes.func,
};
PersonalInfo.defaultProps = {
  toogleModal: () => {},
};

export default PersonalInfo;
