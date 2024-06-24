import shortUUID from "short-uuid"

const short = require('short-uuid');
const translator = short();

const makeShortUuid = (): string => {
    const uuid: string = translator.new();
    return uuid
}

makeShortUuid()