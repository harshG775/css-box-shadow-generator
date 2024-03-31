interface HSL {
    h: number;
    s: number;
    l: number;
}

export default function hexToHSL(hex: string): HSL {
    // Remove the hash prefix if it exists
    const cleanHex = hex.replace(/^#/, "");

    // Ensure the hex code is 6 characters long
    if (cleanHex.length !== 6) {
        throw new Error("Invalid hex code. It should be 6 characters long.");
    }

    // Convert hex to RGB
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);

    // Convert RGB to HSL
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0,
        s,
        l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
}
