export default function createIteratorObject(report) {
    return (() => {
        for (const department of Object.values(report.allEmployees)) {
            for (const employee of department) {
                yield employee;
            }
        }
    });
}
