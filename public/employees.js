let sally = 'Sally Smith';
let mark = 'Mark Martin';
let holly = 'Holly Unlikely';
let amol = 'Amol Shookup';
let luke = 'Luke Skywalker';
let anita = 'Anita Momoney';
let eileen = 'Eileen Over';
let harry = 'Harry Up';
let robin = 'Robin Banks';
let jim = 'Jim Dandy';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol.toUpperCase()), /*#__PURE__*/React.createElement("li", null, luke), /*#__PURE__*/React.createElement("li", null, anita), /*#__PURE__*/React.createElement("li", null, eileen), /*#__PURE__*/React.createElement("li", null, harry), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, jim));
ReactDOM.render(element, document.getElementById('content'));