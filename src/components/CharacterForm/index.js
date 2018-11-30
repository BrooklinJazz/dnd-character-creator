import React, { Fragment, useState } from "react";
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

export default function CharacterForm() {
    const [name, setName] = useState("")
    const [str, setStr] = useState()
    const [dex, setDex] = useState()
    const [con, setCon] = useState()
    const [int, setInt] = useState()
    const [wis, setWis] = useState()
    const [cha, setCha] = useState()
    return (
        <Fragment>
            <TextField label="name" value={name} onChange={({ target: { value } }) => setName(value)} />
            <div className="Attributes">
                <Attribute valName="Str" val={str} setVal={setStr} />
                <Attribute valName="Dex" val={dex} setVal={setDex} />
                <Attribute valName="Con" val={con} setVal={setCon} />
                <Attribute valName="Int" val={int} setVal={setInt} />
                <Attribute valName="Wis" val={wis} setVal={setWis} />
                <Attribute valName="Cha" val={cha} setVal={setCha} />
            </div>
            <div>{name}</div>
        </Fragment>
    )
}

function Attribute({ valName, val, setVal }) {
    return (
        <FormControl >
            <InputLabel htmlFor={`char-${valName}`}>{valName}</InputLabel>
            <Input id={`char-${valName}`} helperText={`${valName}`} type="number" className="Attribute" value={val} onChange={({ target: { value } }) => setVal(value)} />
            <div>{val}</div>
        </FormControl>
    )
}