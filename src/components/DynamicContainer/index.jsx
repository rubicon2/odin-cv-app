import './index.css';

// Can create and delete copies of a component.
// The component type is passed in as a prop.
// The prop values for the component are also passed in.
// The values are passed down to each instance of the component.
// onAdd and onDelete functions are passed as props.
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
