import { React } from "react";
import PropTypes from "prop-types";
//import '../../App.css';

import styles from "./Register.module.css";

import { CardDefault } from "../../ui/components/card-default/card-default";
import { PageContainer } from "../../ui/components/page-container/page-container";

import useForm from "../../hooks/useForm";
import { Text } from "../../ui/components/text-default/text-default";
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
          <Text className={styles["text1"]}>Plagio Control</Text>
          <Text className={styles["text2"]}>Login Plagio Control</Text>
          <Text className={styles["text3"]}>
            Enter your email and password below
          </Text>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <form className={styles["form"]} onSubmit={onSubmit}>
              <div className={styles["textefield-label-icon-default"]}>
                <Text className={styles["text-email"]}>EMAIL</Text>
                <input
                  type="text"
                  name="Email address"
                  placeholder="Email address"
                  onChange={handlerChangeForm}
                  className={styles[" input"]}
                />
              </div>

              <div className={styles["textefield-label-icon-default"]}>
                <Text className={styles["text-passw"]}> PASSWORD</Text>
                <input
                  type="password"
                  name="password"
                  placeholder="Paswword"
                  onChange={handlerChangeForm}
                  className={styles["input2"]}
                />
              </div>

              <div className={styles["textefield-label-icon-default"]}>
                <Text className={styles["text-passw"]}> RE. PASSWORD</Text>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handlerChangeForm}
                  className={styles["placeholder"]}
                />
              </div>
              <Text className={styles["forgot-password"]}>
                Forgot password?
              </Text>
              <button className="button" type="submit">
                {label}
              </button>

              <span className={styles["singin"]}>
                You do not have an acount?
              </span>

              <span className={styles["log"]}>
                Login
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
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
