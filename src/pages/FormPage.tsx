import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import styled from "styled-components";
import {Button, IconButton, TextField} from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid'
import {makeStyles} from "@mui/material";

type ObjType = {
    santaName?: string
    recipientName?: string
    email?:string
}
type FieldType = {
    name:string
    email:string
    id:string
    recipientName?: string
}
const FormPage = () => {

    const initialState = {name: '', email: '', id:uuidv4()}
    // const [names, setNames] = useState<Array<string | null>>([])
    const [fullName, setFullName] = useState<string>('')
    const [pair, setPair] = useState<Array<ObjType>>([])

    const [inputFields, setInputFields] = useState<Array<FieldType>>([initialState])

    const addInputRow = ()=>{
        let _inputFields = [...inputFields]
        _inputFields.push({
            name:'',
            email:'',
            id:uuidv4()
        })
        setInputFields(_inputFields)
    }
    const removeInputRow = (removeId:string)=>{
        //_... === temp...temporarily variable
        let _inputFields = [...inputFields]
        _inputFields = _inputFields.filter(el=>el.id !== removeId)
        setInputFields(_inputFields)
    }
    const memberChangeHandler = (id:string, event:ChangeEvent<HTMLInputElement>)=>{
        const index = inputFields.findIndex(m=>m.id === id)
        let _inputFields = [...inputFields] as any
        _inputFields[index][event.target.name]=event.target.value
        setInputFields(_inputFields)
    }
    const handleInvitation = ()=>{

        giftHandler()
    }
    console.table(pair)



    // const secretSantaNames = [...names].sort(() => 0.5 - Math.random())
    const secretSantaNames:Array<string> = inputFields.map(el=>el.id).sort(() => 0.5 - Math.random())

    const giftHandler = () => {
        //daily-dev-tips.com/posts/public-solving-secret-santa-in-javascript/
        setPair([])
        const res =  inputFields.map(el=>el.id).reduce((acc, recipientName) => {
            let santaName = secretSantaNames.filter((secretSantaName) => secretSantaName !== recipientName)[0]
            secretSantaNames.splice(secretSantaNames.findIndex((i) => i === santaName), 1);
            if (santaName === undefined) {
                // Edge case where last person was assigned to their own name
                // Simply swap with the first one.
                santaName = acc[0].santaName as string;
                acc[0].santaName = recipientName;
            }
            acc.push({recipientName, santaName})
            return acc
        }, [] as ObjType []);


        setPair(res)
    }
    const array1_Values = inputFields.map(elem => elem.id);
    const newArray = pair.map(elem => {
        if (array1_Values.includes(elem.santaName as string)&& !elem.hasOwnProperty('email')) {
            elem.email = inputFields?.find(el=>el.id ===elem.santaName)?.email
            elem.santaName = inputFields?.find(el=>el.id ===elem.santaName)?.name
            elem.recipientName = inputFields?.find(el=>el.id ===elem.recipientName)?.name
            return elem;
        }
    })

    return (
        <div className='flex-col mx-56 my-10'>
            <p className='text-gray-700 text-4xl font-semibold mb-8'>Participants</p>
            <p className='text-gray-500 text-xl font-semibold mb-8'> Fill out the full name of every person taking part</p>
            <div>
                {inputFields.map((inputField)=>(
                    <div key={inputField.id}>
                        <input
                            name='name'

                            onChange={(e)=>memberChangeHandler(inputField.id, e)}

                        />
                        <input
                            name='email'
                            onChange={(e)=>memberChangeHandler(inputField.id, e)}
                        />

                        {
                            inputFields.length > 1 &&
                                <RemoveIcon onClick={()=>removeInputRow(inputField.id)} />
                        }
                            <AddIcon onClick={()=>addInputRow()}/>

                    </div>
                ))}
                <button onClick={handleInvitation}
                    className='text-white my-3 py-2 rounded-xl px-6 bg-green-800'>Send</button>
            </div>
            <div>{newArray.map((el,index)=>{
                return(
                    <div className='flex gap-2'>
                    <div>User:{el?.santaName}</div>
                    <div>Is Santa for:{el?.recipientName}</div>
                    <div>send to Email:{el?.email}</div>
                    </div>
                )
            })}</div>
        </div>
    );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  
`
const InputWrapper =styled.input`
  background-color: #282c34;
`
const UlWrapper = styled.ul`
    color: #000;
`
const LiWrapper = styled.li`
color: blue;
`
const ButtonWrapper =styled.button``
export default FormPage;