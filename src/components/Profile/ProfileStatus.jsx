import React from "react";

export const ProfileStatus = (props) => {
  const [editMode, setEditMode] = React.useState(false);
  const [status, setStatus] = React.useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    if (status !== props.status) props.updateStatus(status);
  };

  const onStateChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {editMode ? (
        <input
          value={status}
          onChange={onStateChange}
          onBlur={deactivateEditMode}
          autoFocus
          placeholder="Status"
        />
      ) : (
        <span onDoubleClick={activateEditMode}>
          {props.status || "empty status"}
        </span>
      )}
    </div>
  );
};
