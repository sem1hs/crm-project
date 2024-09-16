import React from "react";

const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Şirket İsmi</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="adres">Adres</label>
        <input type="text" id="adres" />
      </div>
      <div>
        <label htmlFor="phone">Telefon</label>
        <input type="tel" id="phone" />
      </div>
    </form>
  );
};

export default Form;
