
let foo = 'http://localhost:8080/api/horoscope/daily?sign=aquarius';
function Api() {
        function getDailyHoroscope() {
                // Fetch data from our own proxyserver
                const response = fetch("http://10.2.3.153:8080/api/horoscope/daily?sign=aquarius", {
                }).then(response => response.json());
                console.log(response);
        }

        getDailyHoroscope();


    return (
        <div>
            <h1>API</h1>
        </div>
    );
}

export default Api;
