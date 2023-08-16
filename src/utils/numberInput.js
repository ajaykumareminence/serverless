export const handleKeyDown = (event) => {
    if (
        !/^\d$/.test(event.key) && // Allow digits
        event.key !== 'Backspace' && // Allow Backspace key
        event.key !== 'Delete' && // Allow Delete key
        event.key !== 'ArrowLeft' && // Allow Left Arrow key
        event.key !== 'ArrowRight' && // Allow Right Arrow key
        event.key !== 'Tab' && // Allow Tab key
        event.key !== '.' // Allow decimal point
    ) {
        event.preventDefault(); // Prevent input of non-numeric characters
    }
};