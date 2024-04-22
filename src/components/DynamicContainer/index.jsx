import './index.css';

// Used to create and delete copies of a component and pass on their info as an array.
// component type is passed in as a prop.
// componentProps for the component are also passed in (e.g. onChange).
// componentProps are passed down to each instance of the component.
// values prop should be an array of whatever type the component is expecting.
// componentValueName prop is used so correct name is used for the child components prop
// e.g if child component needs to be passed a prop of name "megaProp" to populate a field, we can specify that.
export default function DynamicContainer({
  values,
  component,
  componentProps,
  componentValueName,
  onAdd,
  onDelete,
  edit,
  maxChildren,
}) {
  const children = values.map((value, index) => {
    if (!maxChildren || index < maxChildren) {
      return (
        <div className="dynamic-container-item" key={value.id || index}>
          {component({ ...componentProps, [componentValueName]: value })}
          {edit && (
            <button
              className="dynamic-container-delete-button"
              onClick={() => onDelete(value)}
            >
              Delete
            </button>
          )}
        </div>
      );
    }
  });

  return (
    <div className="dynamic-container">
      {children}
      {!edit && children.length === 0 && (
        <div className="dynamic-container-none-text">None!</div>
      )}
      {edit && (
        <button
          className="dynamic-container-add-button"
          disabled={values.length >= maxChildren}
          onClick={onAdd}
        >
          Add
        </button>
      )}
    </div>
  );
}
