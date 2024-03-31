interface RGB {
    r: number;
    g: number;
    b: number;
}

export default function hexToRGB(hex: string): RGB {
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

    return { r, g, b };
}