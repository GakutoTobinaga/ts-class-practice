import { Low } from 'lowdb';
import { JSONFile } from "lowdb/node"
import { Car, CarShop } from './class.js';
import short from 'short-uuid';

const translator = short();
function makeShortUuid(): string{
  const uuid: string = translator.new();
  return uuid
}

export type Data = {
  cars: Car[];
};

// Read or create db.json

export function initializeDatabase() {
  const adapter = new JSONFile<Data>('db.json');
  const db = new Low<Data>(adapter, { cars: [] });
  // const car = new CarShop()
  // 返したdbのメソッドを使う
  return db
}
// const adapter = new JSONFile<Data>('db.json');
// const db = new Low<Data>(adapter, { cars: [] });

// const car = new CarShop()

// export async function database() {
//   const db = initializeDatabase();
//   // データベースの読み込み
//   await db.read();
//   // デフォルトデータの設定
//   db.data ||= { cars: [] };
//   // const uuid = makeShortUuid();
//   // データの更新
//   // const car: Car = { name: "Lancer EVO VIII", brand: "Mitsubishi", type: "4WD", id: uuid }
//   // db.data.cars.push(car);
//   // await db.write();

//   // データのクエリ
//   // const { cars } = db.data;
//   // const first = cars[0];
//   // const firstCarName = first.name;
//   // const results = posts.filter((post) => post.title.includes('lowdb'));
//   // const post1 = posts.find((post) => post.id === 1);
//   // const sortedPosts = posts.sort((a, b) => a.views - b.views);
//   // console.log(first, `This is a script.js`);
//   return console.log("ok")
// }
// const { cars } = db.data;
// const first = cars[0];
// const firstCarName = first.name;
// database().catch(console.error);
