import React, { FC } from "react";
import { useRouter } from "next/router";
import ErrorLayout from "@/components/Error";

const NotFound: FC = () => {
  const router = useRouter();

  const data = {
    type: "404",
    title: "Not Found",
    image: `${process.env.NEXT_PUBLIC_HOST_IMAGE}?id=10VKrdzgwWc2ULm4qR31CDandRvw4DqCw`,
    description: "Page not found",
    wording: "Sorry, the page you visited does not exist.",
    buttonTitle: "Back Home",
  };

  const handleBack = () => {
    (async () => {
      const pathname = "/";
      await router.push(pathname);
    })();
  };

  return <ErrorLayout buttonHandle={handleBack} {...data} />;
};

export default NotFound;
