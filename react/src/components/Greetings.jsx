function Greetings(){
    const name = "john";
    const today = new Date();

    return(
        <div>
            <h1>Hello, {name}!</h1>
            <p>Today is: {today.getDate()}</p>
        </div>
    );
}

export default Greetings;