const ErrorUtil = {}

ErrorUtil.invalidParam = function (p) {
    if (!p) debugger
}

ErrorUtil.typeCheck = function (p, type) {
    if (p !== type) debugger
}

ErrorUtil.assert = function (p, a) {
    if (p !== a) {
        console.log(`Assert failed... ${p} must be ${a} !`)
        debugger
    }
}

export default ErrorUtil
