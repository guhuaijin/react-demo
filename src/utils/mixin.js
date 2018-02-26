export default (...list) => {
    return target => {
        Object.assign(target.prototype, ...list);
    }
}

