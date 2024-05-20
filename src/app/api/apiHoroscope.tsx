const prefix = "http://localhost:8080/api/horoscope/";

export async function getDailyHoroscope(sign: String, day: String) {
    const suffix = "daily?sign=" + sign
    const request = await fetch(prefix + suffix)
    return await request.json();
}

export async function getDailyHoroscopeWithDay(sign: String, day: String) {
    const suffix = "daily?sign=" + sign + "&day=" + day
    const request = await fetch(prefix + suffix)
    return await request.json();
}

export async function getWeeklyHoroscope(sign: String) {
    const suffix = "weekly?sign=" + sign
    const request = await fetch(prefix + suffix)
    return await request.json();
}

export async function getMonthlyHoroscope(sign: String) {
    const suffix = "monthly?sign=" + sign
    const request = await fetch(prefix + suffix)
    return await request.json();
}