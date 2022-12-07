import { AiTwotoneHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsPersonCheck } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import {AiOutlineSave } from "react-icons/ai";
import {AiOutlineShop } from "react-icons/ai";
import {AiOutlineSchedule } from "react-icons/ai";
import {AiOutlineSetting } from "react-icons/ai";
import {AiOutlineRise } from "react-icons/ai";
import {AiOutlineUser } from "react-icons/ai";

export default function Sider(){
    return(
    <div id='sider1'>
        <div id='sider1_1'> <AiTwotoneHome/> Dashboard </div>
        <div id='sider1_2'><BiUser/>Employee</div>
        <div id='sider1_3'><BsPersonCheck/>Atteendence</div>
        <div id='sider1_4'><AiOutlineUserAdd/>Site/Field Track</div>
        <div id='sider1_5'><AiOutlineSave/>Payroll</div>
        <div id='sider1_6'><AiOutlineShop/>Statuatory Compliances</div>
        <div id='sider1_7'><AiOutlineSchedule/>Leaves</div>
        <div id='sider1_8'><AiOutlineSetting/>Asset Management</div>
        <div id='sider1_9'><AiOutlineRise/>Goals &Performance</div>
        <div id='sider1_10'><AiOutlineUser/>Recruitment</div>
        <div id='sider1_11'>Openings</div>
        <div id='sider1_12'>Candidates</div>
        <div id='sider1_13'>Interview Process</div>
        

    </div>
    )
}