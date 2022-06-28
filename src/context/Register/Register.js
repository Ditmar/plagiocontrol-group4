import { React } from "react";
import PropTypes from "prop-types";
//import '../../App.css';
import styles from "./Register.module.css";

import { CardDefault } from "../../ui/components/CardDefault/CardDefault";
import { PageContainer } from "../../ui/components/PageContainer/PageContainer";

import useForm from "../../hooks/useForm";
export const Register = ({ isLoading, errors, label }) => {
  const [handlerChangeForm] = useForm({ username: "", password: "" });
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <PageContainer className={styles["container"]}>
      <CardDefault className={styles["card-singup"]}>
        <h6>Logo</h6>
        <h4>Plagio Control</h4>
        <h2>Login Plagio Control</h2>
        <h6>Enter you Email and password below </h6>
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
