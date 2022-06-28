import { React } from "react";
import PropTypes from "prop-types";
//import '../../App.css';
import styles from "./Register.module.css";

import { CardDefault } from "../../ui/components/card-default/card-default";
import { PageContainer } from "../../ui/components/page-container/page-container";

import useForm from "../../hooks/useForm";
export const Register = ({ isLoading, errors, label }) => {
  const [handlerChangeForm] = useForm({ username: "", password: "" });
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <PageContainer className={styles["container"]}>
      <CardDefault className={styles["card"]}>
        <div className={styles["sing-in"]}>
          <div className={styles["logo"]}>
            <div className={styles["ellipse"]}>
              <img src="/images/D.png" alt="D" />
            </div>
          </div>
          <span className={styles["text1"]}>
            <span>Plagio Control</span>
          </span>
          <span className={styles["text2"]}>Login Plagio Control</span>
          <span className={styles["text3"]}>
            Enter your email and password below
          </span>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <form onSubmit={onSubmit}>
              <h6>Email</h6>
              <input
                type="text"
                name="username"
                onChange={handlerChangeForm}
                placeholder="User name"
                className={errors ? "inputErrors" : ""}
              />

              <h6>Pasword</h6>
              <input
                type="password"
                name="password"
                onChange={handlerChangeForm}
                placeholder="User name"
                className={errors ? "inputErrors" : ""}
              />

              <li>
                <input className="button" type="submit" value={label} />
              </li>
            </form>
          )}
        </div>
      </CardDefault>
    </PageContainer>
  );
};

Register.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  isLoading: PropTypes.bool,
  errors: PropTypes.bool,
  label: PropTypes.string,
};
