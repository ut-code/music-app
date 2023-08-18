

export type SendingData = {
    tempo:number;
    energy:number;
    speech:number;
    valence:number;
    mode:number;
    err:number
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

function onClick(data:SendingData){

    //const json:string = JSON.stringify(data);
    var url = 'url'+'?';

    url+='tempo='+data.tempo;
    url+='&energy='+data.energy;
    url+='&speech='+data.speech;
    url+='&valence='+data.valence;
    url+='&mode='+data.mode;
    url+='&err='+data.err;
  
    fetch('url', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

}