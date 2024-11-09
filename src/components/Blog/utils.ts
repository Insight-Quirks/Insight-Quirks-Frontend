export const blogData = {
    title: "Exploring the Depths of Web Development",
    subtitle: "A journey through frontend, backend, and everything in between",
    image: "https://media.istockphoto.com/id/1970247987/photo/customer-service-management-digital-transformation-technology-strategy-optimize-and-automate.jpg?s=2048x2048&w=is&k=20&c=CiKpxTsn_VrUUoNR5oAiF2-MNBvYwnbT7xWGBsvFMkY=",
    data: [
      {
        id: "section1",
        subheading: "Introduction to Web Development",
        description: "Web development is a fast-paced and ever-evolving field that brings together creativity, logic, and technology to build interactive experiences. From simple static websites to complex applications, web development covers a vast array of possibilities that can change the way we interact with the world online.",
      },
      {
        id: "section2",
        subheading: "Frontend Technologies",
        description: "Frontend development focuses on building the part of the website that users directly interact with. Technologies like HTML, CSS, and JavaScript form the backbone of frontend development, while frameworks such as React, Vue, and Angular provide tools for creating complex user interfaces efficiently. The frontend developer must balance aesthetics with functionality, ensuring a smooth and enjoyable user experience."
      },
      {
        id: "section3",
        subheading: "Backend Technologies",
        description: "Backend development manages the server side, handling everything that users don’t directly see. Backend technologies such as Node.js, Python, and Java allow developers to manage databases, authentication, and application logic. Frameworks like Express, Django, and Spring facilitate efficient server management, while databases like MongoDB, PostgreSQL, and MySQL enable the storage and retrieval of data."
      },
      {
        id: "section4",
        subheading: "The Future of Web Development",
        description: "With advancements in AI, machine learning, and VR/AR, the future of web development promises exciting changes. Progressive web apps (PWAs) and single-page applications (SPAs) are becoming more prevalent, while tools like WebAssembly allow developers to execute code at near-native speed. These advancements not only enhance performance but also broaden the scope of what’s possible within the browser."
      },
      {
        id: "section5",
        subheading: "Full-Stack Development",
        description: "Full-stack development covers both frontend and backend, requiring knowledge of multiple technologies and frameworks. Full-stack developers bridge the gap between user interface and server management, making them highly versatile and in-demand in the job market. Skills in frontend frameworks like React or Angular, along with backend tools like Node.js or Django, are essential for full-stack developers."
      },
      {
        id: "section6",
        subheading: "Deployment and DevOps",
        description: "Deployment is the final stage in bringing a web application to the public. DevOps practices emphasize collaboration between developers and IT professionals to streamline the deployment process. Tools like Docker, Kubernetes, and CI/CD pipelines (e.g., Jenkins, GitHub Actions) allow for efficient management of application lifecycles, enabling developers to roll out new features and updates seamlessly."
      }
    ]
  };
  

export type BlogDataType = [] | 
    {
        id: string,
        subheading: string,
        description: string,
    }[]

export type BlogType = typeof blogData
  