
function createNoticiaDTO(newOne, _id, datetime) {
    return {
        ...newOne,
        _id,
        datetime
    }
}

export default createNoticiaDTO