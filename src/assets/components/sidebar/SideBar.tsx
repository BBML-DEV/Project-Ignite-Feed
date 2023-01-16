//biblioteca de icones
import {PencilLine} from 'phosphor-react'
import { Avatar } from '../avatar/Avatar'

export const SideBar = () => {
    return (
        <aside className="sidebar">
           <img className="sidebar__cover" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" /> 
           <div className="sidebar__profile">
           <Avatar src="https://github.com/BBML-DEV.png" />
                <strong>Paulo Vitor Marques Lemos</strong>
                <span>Web Developer</span>
           </div>

           <footer className="sidebar__footer">
                <button className="btn__profile">
                    <PencilLine size={20} />
                    Editar seu perfil
                </button>
           </footer>
        </aside>
    )
}