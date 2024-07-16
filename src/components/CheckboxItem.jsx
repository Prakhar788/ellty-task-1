import "../styles/checkboxitem.css"
export function CheckboxItem({ id, label, checked, onChange }) {
    return (
      <div className="checkbox-container">
        <label  className="Checkbox" htmlFor={id}>
          {label}
         
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={onChange}
          />
          <span className="Checkmark"></span>
       
          
        </label>
      </div>
    );
}