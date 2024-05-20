const prefix = "https://api.nasa.gov/planetary/apod?api_key=" + process.env.NEXT_PUBLIC_NASA_KEY

export async function getApodWithDate(date: String) {
    const suffix = "&date=" + date
    const request = await fetch(prefix + suffix)
    return await request.json();
}

export async function getApod() {
    const request = await fetch(prefix)
    return await request.json();
}

