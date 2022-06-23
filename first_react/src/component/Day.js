import dummy from "../db/data.json";
import { useParams } from "react-router-dom";

export default function Day(){
    // dummy.words
    // const day = 3;

    // 첫번째 방법
    // const a = useParams();
    // const day = a.day;

    // 두번째 방법
    // const day = useParams().day;

    // 세번째 방법
    const {day} = useParams();

    const wordList = dummy.words.filter(word => (
        word.day === Number(day)
        )) 
        console.log(day)

    return(
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map(word => (
                    <tr key={word.id}>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}