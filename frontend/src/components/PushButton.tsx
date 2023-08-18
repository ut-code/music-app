

export type SendingData = {
    tempo:number;
    energy:number;
    speech:number;
    valence:number;
    mode:number;
    tolerance:number
}

type ButtonProp = {
    getter:()=>SendingData
}


export default function PushButton(props:ButtonProp):JSX.Element{

  return (
    <>
    <button onClick={()=>onClick(props.getter())}>PUSH!</button>
    </>
  );

}

async function onClick(data:SendingData){

    //const json:string = JSON.stringify(data);
    var url = 'url'+`?tempo=${data.tempo}&energy=${data.energy}&speech=${data.speech}&valence=${data.valence}&mode=${data.mode}&
    tolerance=${data.tolerance}`;
  

    var response:any;
    await fetch(url, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        response = data;
    });



    
}