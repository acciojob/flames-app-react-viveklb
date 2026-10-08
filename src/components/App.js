import React, {useState} from "react";
import '../styles/App.css';

const relationships = {
    0: "Siblings",
    1: "Friends",
    2: "Love",
    3: "Affection",
    4: "Marriage",
    5: "Enemy",
};

function App() {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [answer, setAnswer] = useState("");

    function calculateRelationship(event) {
        event.preventDefault();

        if (!name1.trim() || !name2.trim()) {
            setAnswer("Please Enter valid input");
            return;
        }

        const remainingName2 = Array.from(name2);
        let remainingCount = 0;

        Array.from(name1).forEach((character) => {
            const matchingIndex = remainingName2.indexOf(character);
            if (matchingIndex !== -1) {
                remainingName2.splice(matchingIndex, 1);
            } else {
                remainingCount += 1;
            }
        });

        remainingCount += remainingName2.length;
        setAnswer(relationships[remainingCount % 6]);
    }

    function clearForm() {
        setName1("");
        setName2("");
        setAnswer("");
    }

    return (
        <div id="main">
            <form onSubmit={calculateRelationship}>
                <label htmlFor="name1">Name 1</label>
                <input
                    id="name1"
                    data-testid="input1"
                    name="name1"
                    value={name1}
                    onChange={(event) => setName1(event.target.value)}
                />
                <label htmlFor="name2">Name 2</label>
                <input
                    id="name2"
                    data-testid="input2"
                    name="name2"
                    value={name2}
                    onChange={(event) => setName2(event.target.value)}
                />
                <button
                    type="submit"
                    data-testid="calculate_relationship"
                    name="calculate_relationship"
                >
                    Calculate Relationship
                </button>
                <button type="button" data-testid="clear" name="clear" onClick={clearForm}>
                    Clear
                </button>
            </form>
            <h3 data-testid="answer">{answer}</h3>
        </div>
    );
}

export default App;
