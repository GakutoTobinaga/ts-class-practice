import { Low } from 'lowdb';
import { JSONFile } from "lowdb/node";
import short from 'short-uuid';
const translator = short();
function makeShortUuid() {
    const uuid = translator.new();
    return uuid;
}
// Read or create db.json
const adapter = new JSONFile('db.json');
const db = new Low(adapter, { cars: [] });
async function main() {
    // データベースの読み込み
    await db.read();
    // デフォルトデータの設定
    db.data || (db.data = { cars: [] });
    const uuid = makeShortUuid();
    // データの更新
    const car = { name: "Lancer EVO VIII", brand: "Mitsubishi", type: "4WD", id: uuid };
    db.data.cars.push(car);
    await db.write();
    // データのクエリ
    const { cars } = db.data;
    const first = cars[0];
    const firstCarName = first.name;
    // const results = posts.filter((post) => post.title.includes('lowdb'));
    // const post1 = posts.find((post) => post.id === 1);
    // const sortedPosts = posts.sort((a, b) => a.views - b.views);
    console.log(firstCarName);
}
main().catch(console.error);
//# sourceMappingURL=main.js.map