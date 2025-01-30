function isWeekend(weekday: string): boolean {
    switch (weekday) {
        case 'Sunday':
            return true;
        case 'Saturday':
            return true;

        default:
            return false
    }
}
console.log(isWeekend('Saturday'))
console.log(isWeekend('Tuesday'))