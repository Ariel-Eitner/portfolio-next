import Link from "next/link";
import blogPosts from "@/data/blogData";

export default function BlogPage() {
  return (
    <>
      <div>
        <p>
          esta es la seccion principal del blog, luego se iran agregando rutas
          diferentess Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Itaque quia, repellat aliquam nam voluptate perspiciatis, veniam
          reprehenderit expedita ratione quas earum aperiam? Libero soluta odit
          modi quam voluptatum consequatur labore. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quas aut porro tempora eveniet alias
          totam voluptate assumenda perferendis. Harum quia sunt amet voluptatum
          at ipsa earum velit delectus libero porro? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatem maiores itaque enim
          consequatur perferendis ad totam ex sed minima! Accusantium
          distinctio, nesciunt quod optio consequatur nostrum eum voluptas
          assumenda ut? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Odio dicta dolorum at, voluptatum molestias et! Sunt quisquam
          fugit quia facilis atque similique, rerum blanditiis harum non eaque
          voluptas sit reiciendis!
        </p>
        <ul>
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/post/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
