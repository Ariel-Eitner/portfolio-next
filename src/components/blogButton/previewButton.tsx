import { useRouter } from "next/navigation";

export const PreviewButton = () => {
  const router = useRouter();
  const blogPost = {
    // Este es tu objeto de post
  };

  const handlePreview = () => {
    router.push("/blog/new-post/preview");
  };

  return <button onClick={handlePreview}>Vista Previa</button>;
};
