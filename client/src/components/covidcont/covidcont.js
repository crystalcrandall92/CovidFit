import React from "react";
import "../css/styles.css";


function covidcont(props) {
    console.log(props.data)
    return (<div style={{width: "70%", margin: "0 auto"}} class="homechartbox">
        { props.data.length > 0 && <table style={{ width: "100%", backgroundColor: "white" }}>
            <thead>
                <tr>
                    {
                        Object.keys(props.data[0]).map((c, i) => <td key={i + '-col'}>{c}</td>)
                    }
                    {/* <td><img src="#" alt="..." /></td>
                    <td><img src="#" alt="..." /></td>
                    <td><img src="#" alt="..." /></td>
                    <td><img src="#" alt="..." /></td>
                    <td><img src="#" alt="..." /></td>
                    <td><img src="#" alt="..." /></td>
                    <td><img src="#" alt="..." /></td> */}
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((d, i) =>
                        <tr key={i + '-row'} >
                            {
                                Object.values(d).map((c, i) => <td key={i + '-col'}>{c}</td>)
                            }
                        </tr>)
                }
            </tbody>
        </table>}
    </div>
    );
}

export default covidcont;