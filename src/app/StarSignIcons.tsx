interface ZodiacSign {
    Symbol: string;
    Entity: string;
}

interface ZodiacSigns {
    Aries: ZodiacSign;
    Taurus: ZodiacSign;
    Gemini: ZodiacSign;
    Cancer: ZodiacSign;
    Leo: ZodiacSign;
    Virgo: ZodiacSign;
    Libra: ZodiacSign;
    Scorpio: ZodiacSign;
    Sagittarius: ZodiacSign;
    Capricorn: ZodiacSign;
    Aquarius: ZodiacSign;
    Pisces: ZodiacSign;
}

const zodiacSigns = {
    Aries: {
        Symbol: "U+2648",
        Entity: "U+1F40F"
    },
    Taurus: {
        Symbol: "U+2649",
        Entity: "U+1F402"
    },
    Gemini: {
        Symbol: "U+264A",
        Entity: "U+1F46D",
    },
    Cancer: {
        Symbol: "U+264B",
        Entity: "U+1F980",
    },
    Leo: {
        Symbol: "U+264C",
        Entity: "U+1F981",
    },
    Virgo: {
        Symbol: "U+264D",
        Entity: "U+1F407",
    },
    Libra: {
        Symbol: "U+264E",
        Entity: "U+2696",
    },
    Scorpio: {
        Symbol: "U+264F",
        Entity: "U+1F982",
    },
    Sagittarius: {
        Symbol: "U+2650",
        Entity: "U+1F3F9",
    },
    Capricorn: {
        Symbol: "U+2651",
        Entity: "U+1F410",
    },
    Aquarius: {
        Symbol: "U+2652",
        Entity: "U+1F3FA",
    },
    Pisces: {
        Symbol: "U+2653",
        Entity: "U+1F41F",
    }
}

export default zodiacSigns