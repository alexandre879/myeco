"use client"
import { useState } from "react";
import styles from "./styles.module.scss";
import { strict } from "assert";
import { Anek_Malayalam } from "next/font/google";


export default () => {
    const [error, setError] = useState<boolean>(false);
    const [name, setName] = useState<string>('aleksi');
    const [names, setNames] = useState<any[]>([]);
    const [color, setColor] = useState<'green' | 'red'>('green')
    console.log(names, 'names')
    const onChange = (e: any) => {
        setName(e.target.value)
    }

    const onClick = () => {
        if (name === '') {
            setError(true)
        }
        else {
            setError(false)
            setNames([...names, {
                name: name,
                id: names.length + 1,
            }])
            setName('')
        }

    }


    const onClickList = (id: number) => {
        const currentItem = names.findIndex((item) => item.id === id);
        const newItems = [...names]
        newItems[currentItem].className ?
            delete newItems[currentItem].className :
            newItems[currentItem].className = styles.active;
        setNames(newItems)
    }


    return (
        <div className={styles.myContainerParent} >
            {error ? <span className={styles.myError} >You have entered emptiness</span> : <span> </span>}
            <div className={styles.myContainer} >
                <input value={name} type="text" onChange={onChange} className={styles.myInput} />
                <button onClick={onClick} className={styles.myButton} >
                    Add vaooooo
                </button>
            </div>
            <ul className={styles.myList} >
                {names.map(item => <li
                    className={`${item.className} ${styles.mapedList}`}
                    key={item.id}
                    onClick={() => onClickList(item.id)}>{item.name}</li>)}
            </ul>
        </div>
    )
}