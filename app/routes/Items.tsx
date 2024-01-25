import { db } from "~/db/config.server";
import { json} from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { items } from "~/db/schema.server";

export async function loader() {
  // use drizzle to get the dataset(s)
  const dataSets=  db.select().from(items).all()
  return json(dataSets);
}

export async function action() {
  db.insert(items).values({ title: "Item title" }).run()
  return {
    success: true,
  }
}


export default function DisplayItems() {

  const Items = useLoaderData<typeof loader>();

     return (
        <main>
          <h1>Items</h1>
         {Items.length ? (
            <ul>
                { Items.map((item) => (
                <li key={item.id}>
                  {item.title} {item.description}
                </li>
             ))}
            </ul>
           ) : (
            <p> No Items</p>
           )} 
           <Form method="POST">
            <input type="submit" value="Submit" />
          </Form>
          <Link to="/">Home</Link>
        </main>        
    );
}
