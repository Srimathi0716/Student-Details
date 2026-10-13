import React from "react";

const ObjectExample =() =>{
    const student=[{
        id:1,
        name:"Arun",
        age:21,
        department:"MCA",
        marks:90
    },
    {
        id:2,
        name:"Supriya",
        age:20,
        department:"MCA",
        marks:99
    }
]

//const data=student.map((i)=>{
  //  return(<>
    //{i.name}
    //</>)
//})
//console.log(data);

const numbers = [1,2,3,4,5,6];
console.log("pop",numbers.pop());
console.log("push",numbers.push(7),numbers)
console.log("shift",numbers.shift(),numbers)
console.log("unshift",numbers.unshift(0),numbers)
const filtered = numbers.filter(
    function(x){
        return x>5
    }
)
console.log(filtered)
const names = ["nandhu" , "supriya" , "lokesh" , "praveen"]
//const result = names.slice(1,3)
//console.log("result" , names)

const spliceresult=names.splice(1,2,"added")

console.log(">>>>>" , spliceresult)
console.log(names)

const datamark=student.filter((i)=>i.marks>98)
console.log(datamark)

        return(
            <>
                <table>
                    <thead>
                    <th>name</th>
                    <th>age</th>
                    <th>mark</th>
                    <th>department</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Rithanya</td>
                            <td>20</td>
                            <td>98</td>
                            <td>CSE</td>
                        </tr>
                        <tr>
                            <td>Srimathi</td>
                            <td>21</td>
                            <td>96</td>
                            <td>CSE</td>
                        </tr>
                    </tbody>
                </table>
        {datamark.map((i)=>{
            return(
                <>
                {i.name}
                </>
            )
        })}
             </>
        )
}
export default ObjectExample;