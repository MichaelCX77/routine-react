import ButtonSmall from './buttons/ButtonSmall'
import { generateHours } from "../uteis/timeUtil"
import React from 'react';
                                     
function head(){
    return(
        <thead className="text-left text-cyan-800 bg-slate-100">
            <tr>
                <th className="pl-2 py-2">Horário</th>
                <th className="pl-2 py-2">Tarefa</th>
                <th className="pl-2 py-2">Descrição</th>
                <th className="pl-2 py-2">Ações</th>
            </tr>
        </thead>
    )
}

function getButtons(props,task){

    return (
        <React.Fragment>
            <ButtonSmall onClick={props.deleteTask(task)} class="p-1 rounded-md hover:bg-red-300" style="mdiDelete" color="#F5756C"/>
            <ButtonSmall onClick={props.editTask(task)} class="p-1 rounded-md hover:bg-sky-500" style="mdiPencil" color="#1977D4"/>
        </React.Fragment>
    )
}

function getLine(props, task, style){

    const classe_td="pl-2 py-2"
    style = style ? "bg-cyan-200 gray-600" : "bg-cyan-600 white"

    return (
        <tr key={task.getId} className={`${style} hover:bg-slate-200`}>
            <td className={classe_td}>{task.horario}</td>
            <td className={classe_td}>{task.title}</td>
            <td className={classe_td}>{task.descricao}</td>
            <td className='flex flex-wrap place-content-evenly'>
                {getButtons(props,task)}
            </td>
        </tr>
    )
}

function body(props){

    let style = false;

    return (
        <tbody className="">
            {props.getListTasks().map((task) => {

                if(task.data == props.actualDate){
                    style = (style == true) ? false : true
                    return getLine(props, task, style)
                } else {
                    return ""
                }
            })}
        </tbody>
    )
}

export default function Table(props){
    return (
        <table className="w-auto border-2 border-gray-200">
            {head()}
            {body(props)}
        </table>
    )
}