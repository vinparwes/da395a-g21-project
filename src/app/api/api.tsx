export async function getDailyHoroscope(sign: String, day: String) {
    const request = await fetch("http://localhost:8080/api/horoscope/daily?sign=aquarius")
    return await request.json();
}