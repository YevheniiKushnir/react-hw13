import React from "react";
import { connect } from "react-redux";
import { filterAction } from "../../redux/actions";

import styles from "./Filter.module.css";

const Filter = ({ filter, filterAction }) => {
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => filterAction(e.target.value)}
        placeholder="Type name..."
        className={styles.input}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = { filterAction };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
