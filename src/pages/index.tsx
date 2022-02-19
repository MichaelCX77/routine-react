import Button from '../components/buttons/Button'
import NavBar from '../components/NavBar'
import Table from '../components/Table'
import DateBar from '../components/DateBar'
import Conteudo from '../components/Conteudo'
import Main from '../components/Main'
import Formulario from '../components/Formulario'

export default function Home(){
    return (
        <div className='w-full'>
            <NavBar title="Routine React"/>
            <div className='flex justify-end mx-6 my-4'>
                {/* <Button text="Planejar"/>    */}
            </div>
            <Main title="Planejamento">
                <Conteudo>
                    {/* <DateBar date="14 de Fevereiro - 2022"/>
                    <Table /> */}
                    <Formulario></Formulario>
                </Conteudo>
            </Main>
        </div>
    )
}