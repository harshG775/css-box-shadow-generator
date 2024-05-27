export default function hexToHSL(hex: string): string | undefined {
    if (hex.startsWith('hsl(')) {
        return
    }
    // Remove '#' if it's included
    hex = hex.replace('#', '');

    // Convert hex to RGB
    let r: number = parseInt(hex.substring(0, 2), 16) / 255;
    let g: number = parseInt(hex.substring(2, 4), 16) / 255;
    let b: number = parseInt(hex.substring(4, 6), 16) / 255;

    // Find the minimum and maximum values of RGB
    let max: number = Math.max(r, g, b);
    let min: number = Math.min(r, g, b);

    // Calculate the lightness
    let l: number = (max + min) / 2;

    let h: number, s: number;

    // If the max and min are equal, the color is achromatic
    if (max === min) {
        h = s = 0; // achromatic
    } else {
        // Calculate the saturation
        s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);

        // Calculate the hue
        switch (max) {
            case r:
                h = (g - b) / (max - min) + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / (max - min) + 2;
                break;
            case b:
                h = (r - g) / (max - min) + 4;
                break;
            default:
                h = 0;
                break;
        }
        h /= 6;
    }

    // Convert hue, saturation, and lightness values to percentages
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return `${h}, ${s}%, ${l}%`;
}