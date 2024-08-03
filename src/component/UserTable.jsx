import { useEffect, useState } from "react"
import userJsonDatas from './users.json'
import './table.css'

export default function UserTable() {
    const [checkbox, setCheckbox] = useState(false)
    const [userDatas, setUserDatas] = useState([])
    console.log(userJsonDatas);
    const dataUrl = 'https://jsonplaceholder.typicode.com/users'

    function handleMockSetBoolen() {
        console.log(checkbox)
        setCheckbox(true)
    }

    useEffect(() => {
        async function fetchDatas(dataUrl, boolenval) {

            const response = await fetch(dataUrl);
            const datas = !boolenval ? await response.json() : userJsonDatas;
            setUserDatas(datas)
        }
        fetchDatas(dataUrl, checkbox)

    }, [])
    // useEffect(()=>{

    // })
    // function fetchData() {
    //     const data = userJsonDatas
    //     setUserDatas(data)
    // }

    // fetchData()

    return (
        <>
            <div>
                <label htmlFor="mock">Use Mock Data : </label>
                <input type="checkbox" id="mock" onClick={handleMockSetBoolen} />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Address</th>
                    </tr>
                </thead>
                {userDatas.map(data => {
                    // console.log(data)
                    return (
                        <tbody key={data.id}>
                            <tr>
                                <td >{data.id}</td>
                                <td >{data.name}</td>
                                <td className="inner-Tabel">
                                    <tr>
                                        <td >email : {data.email}</td>
                                    </tr>
                                    <tr>
                                        <td>phone : {data.phone}</td>
                                    </tr>
                                    <tr>
                                        <td>website : {data.website}</td>
                                    </tr>
                                </td>
                                <td className="inner-Tabel">
                                    <tr>
                                        <td> street : {data.address.street}</td>
                                    </tr>
                                    <tr>
                                        <td>suite : {data.address.suite}</td>
                                    </tr>
                                    <tr>
                                        <td>city : {data.address.city}</td>
                                    </tr>
                                    <tr>
                                        <td>zipcode": {data.address.zipcode}</td>
                                    </tr>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>

        </>
    )
}