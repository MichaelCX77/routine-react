import React from "react";
import Input from "./inputs/Input"
import TextArea from "./inputs/TextArea"
import Select from "./inputs/Select";
import Button from "./buttons/Button";
import CheckPerson from "./inputs/CheckPerson";
import { generateHours, arraydays } from "../uteis/timeUtil"
import Tarefas from "../entity/tarefas";
import { getTask } from "../service/TarefasService";

export default function Formulario(props){

    const [id, setId] = React.useState(props.task?.id)
    const [title, setTitle] = React.useState(props.task?.title)
    const [descricao, setDescricao] = React.useState(props.task?.descricao)
    const [data, setData] = React.useState(props.task?.data)
    const [horario, setHorario] = React.useState(props.task?.horario)
    const [naoRepetir, setNaoRepetir] = React.useState(props.task?.nao_repetir)
    const [repetirACD, setrepetirACD] = React.useState(props.task?.repetir_a_cada_dia)
    const [repetirATE, setrepetirATE] = React.useState(props.task?.repetir_a_cada_ate)
    const [color, setColor]= React.useState(props.task?.color)

    function renderInputTitulo(){
        return(
            <div className="flex">
                <Input placeholder="Título" type="text" value={title} 
                    onChange={setTitle}/>
            </div>
        )
    }

    function renderTextArea(){
        return(
            <div className="flex">
                <TextArea value={descricao} placeholder="Descrição" cols="55" rows="4"
                    onChange={setDescricao}/>
            </div> 
        )
    }

    function renderInputDate(){
        return(
            <div className="flex">
                <Input value={data} type="date" width="w-3/4"
                    onChange={setData}/>
                <Select selectedValue={horario} arrayOptions={generateHours()} 
                    onChange={setHorario}/>
            </div> 
        )
    }

    function renderSelectHour(){

        return(
            <div className="flex items-baseline">
                <CheckPerson isChecked={naoRepetir} color="black" onClick={(e) => setNaoRepetir(e)}/>
                <label className="pl-3" htmlFor="check_naorepetir">Não Repetir</label>
            </div>
        )
    }

    function renderFrequency(){

        return(
            <div className="flex items-baseline">
                <span className="pl-3 mt-3 text-2x1">Repetir a cada</span>
                <Select selectedValue={repetirACD} arrayOptions={arraydays}
                    isEnabled={naoRepetir} onChange={setrepetirACD}/>
                <span className="pt-3">até</span>
                <Input value={repetirATE} type="date" width="w-3/4" isEnabled={naoRepetir}
                    onChange={setrepetirATE}/>
            </div>
        )
    }

    function renderSelectColor(){

        const isChecked = componentColor => (color == componentColor) ? true : false

        return(
            <div className="flex items-baseline">
                <CheckPerson isChecked={isChecked('red')} color="#fd4141"
                    classe="px-12 py-3" onClick={() => setColor('red')}/>
                <CheckPerson isChecked={isChecked('blue')} color="#5555fb" 
                    classe="px-12 py-3" onClick={() => setColor('blue')} />
                <CheckPerson isChecked={isChecked('orange')} color="#ffb122" 
                    classe="px-12 py-3" onClick={() => setColor('orange')}/>
                <CheckPerson isChecked={isChecked('green')} color="#25bb25" 
                    classe="px-12 py-3" onClick={() => setColor('green')}/>
            </div>
        )
    }

    function renderButtons(click){
        return(
            <div className="flex place-content-center mt-5">
                <Button text="Voltar" color="bg-gray-400" hover="hover:bg-gray-200" classe="mx-3" onClick={click}/>
                <Button text="Confirmar" class="mx-3" width="w-24" onClick={click}/>
            </div>
        )
    }

    return(
        <React.Fragment>
            <div className="container">
                {renderInputTitulo()}
                {renderTextArea()}
                {renderInputDate()}
                {renderSelectHour()}
                {renderFrequency()}
                {renderSelectColor()}
            </div>
            {renderButtons(props.setTableVisible)}
            <br />
        </React.Fragment>
    )
}