import {React , useState} from 'react'

const ArrowFunction = () => {

    const [value,setValue] = useState(0)

    function Increment(){
        setValue(value + 1)
    }
    return(
        <center>
          <h1>ArrowFunction</h1>
          {value}<br/>
          <button onClick={Increment}>Increment</button>
          <button onClick={() => setValue(value - 1)}>Decrement</button>
        </center>
    )
}
export default ArrowFunction