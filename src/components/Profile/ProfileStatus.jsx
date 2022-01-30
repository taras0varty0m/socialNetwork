import React from "react";

export const ProfileStatus = ({ status }) => {
  const [editMode, setEditMode] = React.useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
  };

  return (
    <div>
      {editMode || !status ? (
        <input
          value={status || ""}
          onChange={(e, value) => {
            console.log(value);
          }}
          onBlur={deactivateEditMode}
          autoFocus
          placeholder="Status"
        />
      ) : (
        <span onDoubleClick={activateEditMode}>{status}</span>
      )}
    </div>
  );
};
