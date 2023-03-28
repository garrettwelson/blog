export function sortPostsByDate(postList) {
    const output = {}
    for (const post of postList) {
        const date = post.data.date;
        const year = String(date.getFullYear())
        const month = String(date.getMonth())
        const day = String(date.getDate())
        if (!output[year]) {
            output[year] = {}
        }
        if (!output[year][month]) {
            output[year][month] = {}
        }
        if (!output[year][month][day]) {
            output[year][month][day] = []
            }
        output[year][month][day].push(post)
    }
    return output
}

export function numberToMonth(num) {
    let date = new Date()
    date.setMonth(num);
    return date.toLocaleString('default', { month: 'long' });
}