import { tableDefinition } from "./tableDefinition";
import styles from '../../styles/CharacterList.module.css';

export default function CharacterList({characters}) {
    const size = Object.keys(tableDefinition).length;

    if (!Array.isArray(characters)){
        return (<div>Invalid data type!</div>)
    }

    const tableHeader =  () =>{
        let header = [];
        for (let i = 0; i < size; i++){
            header.push(<th key={tableDefinition[i].label} >{tableDefinition[i].label}</th>);
        }
        return header;
    }

    const tableData = () =>{
        return characters.map((character)=>{
            return <tr key={character.name} className={styles.starWarsTableRow}>{tableRow(character)}</tr>
        })
    }

    const tableRow = (character) =>{
        let row = [];
        for (let i = 0; i < size; i++){
            if (screen.width < 761){
                row.push(<td key={character.name + "-" + i}><span className={styles.starWarsTableLabel}>{tableDefinition[i].label}:</span>  <span>{character[tableDefinition[i].id]}</span></td>);
            } else {
                row.push(<td key={character.name + "-" + i}>{character[tableDefinition[i].id]}</td>);
            }
        }
        return row;
    }

    return(<table id='starWarsCharacterTable' className={styles.starWarsTable}>
                <thead>
                    <tr>{tableHeader()}</tr>
                </thead>
                <tbody>
                    {tableData()}
                </tbody>
           </table>)
}

CharacterList.defaultProps = {
    characters: []
}