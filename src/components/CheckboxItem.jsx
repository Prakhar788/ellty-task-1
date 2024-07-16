import '../styles/checkboxitem.css'
export function CheckboxItem({ id, label, checked, onChange }) {
    return (
      <div className="checkbox-container">
        <label htmlFor={id}> {label}
            </label>
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={onChange}
          />
         
      </div>
    );
  }