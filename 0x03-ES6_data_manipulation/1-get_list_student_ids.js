export default function getListStudentIds(studentListIds) {
    if (!(studentListIds instanceof Array)) {
        return []
    }
    return studentListIds.map((student) => student.id);
}
