const short = require('short-uuid');
const translator = short();

export function makeShortUuid() : string {
    const uuid: string = translator.new();
    return uuid
}