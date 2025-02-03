function Weather({temperature}){
    console.log(temperature)


    return (
        <p>
            {temperature < 15 ? "It's cold ooutside!" : temperature >= 15 && temperature <= 25 ? "It's nice outside!" : "It's hot outside!"}
        </p>
    )
}

export default Weather