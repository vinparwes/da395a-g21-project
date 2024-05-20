export async function getDailyHoroscope(sign: String, day: String) {
    const request = await fetch("http://192.168.56.1:8080/api/horoscope/daily?sign=aquarius")
    return await request.json();
}