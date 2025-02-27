/**
 * Gets the current string value of a CSS variable. Additional post-processing may be required.
 * @param variableName the name of the CSS variable
 * @returns a string value or an empty string if the variable is not found
 */
export function getCssVariable(variableName) {
    // Get the computed styles of the root element
    const styles = getComputedStyle(document.documentElement);

    // Get the value of the CSS variable
    const color = styles.getPropertyValue(variableName).trim();

    if (color === "") {
        console.error(`CSS variable ${variableName} not found`);
    }

    return color || "";
}