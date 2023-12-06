let sally = 'Sally Smith'
let mark = 'Mark Martin'
let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let luke = 'Luke Skywalker'
let anita = 'Anita Momoney'
let eileen = 'Eileen Over'
let harry = 'Harry Up'
let robin = 'Robin Banks'
let jim = 'Jim Dandy'
const element = (
    <ul style={{'color':'blue', 'fontSize': '24px'}}>
        <li>{sally}</li>
        <li>{mark}</li>
        <li>{holly}</li>
        <li>{amol.toUpperCase()}</li>
        <li>{luke}</li>
        <li>{anita}</li>
        <li>{eileen}</li>
        <li>{harry}</li>
        <li>{robin}</li>
        <li>{jim}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))
