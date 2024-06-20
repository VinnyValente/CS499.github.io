<center>
  <img src="profile.jpg" height=200 width=200>
</center>

# Computer Science Capstone

## <center>CS-499 | SNHU</center>

#### CODE REVIEW

A code review involves quality assurance on a particular project by reviewing its source code and output. This is highly important to the success of computer science professionals, since it ensures a level of consistency in the development of a project and allows for a higher level of coding standards to be met. 

<code>You can watch the code review <a href="Code%20Review.mp4">here</a>.</code>

#### Project 1: Software Engineering and Design

The first artifact of this portfolio is the Travlr Getaways Travel Booking Website, originally developed as part of the CS465 Full Stack Development course. This project is a comprehensive web application that allows users to browse and book travel packages. It includes features for user authentication, trip management, and booking functionalities.

<center>
  <a href="artifacts/travlr%20enhanced.zip" title="Click me to view the artifact report">
    <img src="Enhancement%20One.png" height=250>
  </a>
</center>

<code>See the artifact's report and code <a href="artifacts/travlr%20enhanced.zip">here</a>.</code>

**Narrative:**

The artifact I selected is the Travlr Getaways Travel Booking Website, originally developed as part of the CS465 Full Stack Development course. This project is a comprehensive web application that allows users to browse and book travel packages. It includes features for user authentication, trip management, and booking functionalities.

I chose this artifact for my ePortfolio because it showcases my skills in both front-end and back-end development, as well as my ability to integrate various components into a cohesive application. The enhancements made to this project demonstrate my proficiency with modern web development frameworks, particularly Angular, and my understanding of modular, component-based architecture. This involved creating a new TripDetailsComponent to handle the display of individual trip details, which was previously managed within the TripCardComponent. This separation of concerns improved code modularity and maintainability. The TripCardComponent was updated to utilize the new TripDetailsComponent, simplifying its role to a higher-level component that delegates specific tasks to dedicated components. Additionally, a shared module (SharedModule) was created to handle shared components and services, enabling efficient dependency injection across the application. The TripDataService and AuthenticationService were updated to use Angular's dependency injection, promoting cleaner and more maintainable code.

The primary course objective with this enhancement is the demonstration of innovative techniques and tools in software engineering and design. By refactoring the code to use a component-based architecture, I have improved the maintainability and scalability of the application. This aligns with the course outcomes of designing computing solutions using best practices and managing trade-offs in design choices.

During the enhancement process, I learned more about the importance of modular design in improving code readability and maintainability. One challenge I faced was ensuring seamless interaction between the new components and existing services. This required a solid understanding of Angular's dependency injection and service management. This enhancement not only improved the functionality and maintainability of the Travlr Getaways Travel Booking Website but also reinforced my skills in software design and engineering. It exemplifies my ability to implement advanced front-end development techniques and create scalable web applications.

#### Project 2: Algorithms and Data Structures

This project is an enhancement of the search functionality for the Travlr Getaways Travel Booking Website. It implements advanced search algorithms for better performance and user experience.

<center>
  <a href="artifacts/travlr%20enhanced.zip" title="Click me to view the artifact report">
    <img src="Enhancement%20Two.JPG" height=400>
  </a>
</center>

<code>See the artifact's report and code <a href="artifacts/travlr%20enhanced.zip">here</a>.</code>

**Narrative:**

The artifact selected for this enhancement is the Travlr Getaways Travel Booking Website, originally developed during the CS465 Full Stack Development course. This project is a comprehensive web application that enables users to browse and book travel packages. It includes features for user authentication, trip management, and booking functionalities.

I chose this artifact for my ePortfolio because it demonstrates my ability to implement algorithms and efficient data structures to improve application functionality. Specifically, the enhancement involved implementing and optimizing the search functionality on the website. This showcases my skills in developing efficient algorithms that can handle fuzzy search, allowing for error tolerance in user input, such as typos. This enhancement also highlights my ability to handle and manipulate data effectively.

The key component of this enhancement is the search functionality, which was integrated into the admin side of the website to allow for more efficient trip management. The implementation involved creating a SearchService that fetches trips from the server and filters them based on the search query. The filtering algorithm is designed to handle fuzzy search, matching trips even if there are slight inaccuracies in the search input. Additionally, a SearchComponent was created to provide a user interface for the search functionality, ensuring a seamless user experience.

The primary course objective met with this enhancement is demonstrating the ability to use innovative techniques and tools in algorithms and data structures to solve real-world problems. By implementing an optimized search functionality, I have showcased my proficiency in developing and integrating efficient algorithms within a web application. This enhancement aligns with the course outcomes of designing computing solutions using best practices and managing trade-offs in design choices.

The process of enhancing the search functionality was both challenging and rewarding. One of the main challenges was ensuring the search algorithm could handle fuzzy search efficiently without compromising performance. This required a solid understanding of search algorithms and optimization techniques. Throughout this enhancement, I learned the importance of algorithmic efficiency and the impact of data structures on application performance. Additionally, integrating the search functionality into the existing application required careful planning and coordination to ensure a smooth interaction with existing components and services. This enhancement not only improved the usability of the Travlr Getaways Travel Booking Website but also reinforced my skills in algorithms and data structures, showcasing my ability to implement advanced features in a scalable web application.

#### Project 3: Databases

This database project expands the Travlr Getaways Travel Booking Website to include MongoDB for managing travel data efficiently. It showcases my knowledge of database management and integration.

<center>
  <a href="artifacts/travlr%20enhanced.zip" title="Click me to view the artifact report">
    <img src="Enhancement%20Three%20(1).JPG" height=400>
    <img src="Enhancement%20Three%20(2).JPG" height=400>
  </a>
</center>

<code>See the artifact's report and code <a href="artifacts/travlr%20enhanced.zip">here</a>.</code>

**Narrative:**

The artifact selected is the Travlr Getaways Travel Booking Website, developed during the CS465 Full Stack Development course. This project is a comprehensive web application enabling users to browse and book travel packages, complete with features for user authentication, trip management, and booking functionalities.

I chose this artifact for my ePortfolio because it showcases a broad range of skills in full-stack development, particularly in database management, and user interface design. The enhancement focuses on expanding the MongoDB database capabilities to include advanced features such as text indexing, aggregation pipelines, and database transactions. These improvements demonstrate my ability to implement complex database solutions, enhance search functionality, and ensure data integrity – all critical skills in software development.

This enhancement also shows my ability to design and implement database solutions that support complex data operations and ensure consistency and reliability in data handling. Additionally, the enhancements include implementing text indexing and aggregation pipelines in MongoDB to support complex queries and improve search performance. To enhance the search capabilities, I implemented text indexing on the name and description fields of the Trip model. This allowed for efficient text search queries using MongoDB's $text operator. To generate complex queries for analytics, I utilized MongoDB's aggregation framework. For instance, I implemented an aggregation pipeline to calculate the total number of bookings per destination and the average cost of travel packages. To ensure data integrity during booking and cancellation operations, I implemented database transactions. This involved using Mongoose sessions to ensure that all related operations either succeeded or rolled back together.

The enhancement aligns with several course outcomes. Employing strategies for building collaborative environments enables complex data analysis and reporting, supporting better decision-making processes. Designing and evaluating computing solutions are demonstrated through the advanced query capabilities and transactional integrity, which showcase effective problem-solving using algorithmic principles and computer science practices.

Enhancing this artifact required an in-depth understanding of MongoDB's advanced features. I learned to implement text indexing to improve search efficiency and used aggregation pipelines to generate complex queries for analytics. One of the significant challenges was ensuring data integrity during booking transactions. By implementing database transactions, I ensured that all operations related to a booking either completed successfully or rolled back to maintain consistency.

## Professional Self-Assessment

My time in the Computer Science program at Southern New Hampshire University has assisted in shaping my professional goals and values. It has prepared me to become an asset to prospective employers. This ePortfolio shows my ability to plan and develop industry-standard code and software programs. Although this is not a complete reflection of my work in this program, it still depicts my knowledge in three categories: Software Design and Engineering, Algorithms and Data Structures, and Databases.

The first project displays my knowledge of Software Design and Engineering. It is a travel booking website that allows customers to search and book travel packages. This focuses on my full stack skillset, where I designed a front-end website that utilizes Angular and allows users to search and book trips. The second project, which focuses on Algorithms and Data Structures, enhances the search functionality of the travel booking website using advanced algorithms. Finally, my third project focuses on databases, involving a MongoDB integration for managing travel data efficiently.

I have gained knowledge in these categories, including several other important topics, such as collaborating in a team environment, communicating with stakeholders, and security. During the Computer Science program, I’ve completed multiple activities that involve working in a team to develop and plan the development of software. Particularly during my time in various courses, I conducted changelogs and code reviews, and communicated with stakeholders to ensure a well-rounded product. Additionally, I have experience in roles like QA, product owner, project manager, and developer. Security was another segment of my studies, where I’ve taken multiple courses that teach these concepts, including Secure Coding and Client Server Development.

<code>Course Outcome 1</code>: I employed strategies for building collaborative environments that enable diverse audiences to support organizational decision-making in the field of computer science by completing the code review before beginning my enhancements. The code review is vital to the success of software projects, as it allows developers to fully understand which areas may be improved, alongside an in-depth analysis. This allows for organizational decision-making to be conducted properly. One enhancement that also has met this outcome is Project 3: Databases. This project entailed a MongoDB database that allows for building a collaborative environment in which data may be entered and analyzed easily, even by those without programming experience.

<code>Course Outcome 2</code>: I designed, developed, and delivered professional-quality oral, written, and visual communications that are coherent, technically sound, and appropriately adapted to specific audiences and contexts by completing Project 1: Software Engineering and Design. This project heavily relies on a front-end design that, since it is meant for a business, should be professionally developed with both an appropriate design and professionally written content. It is visually coherent and technically sound in that the front-end and back end work seamlessly to provide a pleasant and easy experience to the customer.

<code>Course Outcome 3</code>: I designed and evaluated computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution while managing the trade-offs involved in design choices by completing Project 2: Algorithms and Data Structures. For this project, I enhanced the search functionality with advanced search algorithms for better performance. This project used algorithmic techniques to improve the efficiency and user experience of the search functionality.

<code>Course Outcome 4</code>: I demonstrated an ability to use well-founded and innovative techniques, skills, and tools in computing practices to implement computer solutions that deliver value and accomplish industry-specific goals by completing Project 1: Software Engineering and Design. For this project, I built and enhanced a travel booking website where users can search and book travel packages. This outcome was met because both a backend and frontend were developed, which required full-stack knowledge to complete the project, from working with Angular, Node.js, and MongoDB. The innovative techniques used in this project include a responsive website and advanced search algorithms.

<code>Course Outcome 5</code>: I developed a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resources by completing Project 3: Databases. Since this project works with data, it was imperative to ensure security measures were in place. The MongoDB integration includes security practices to protect data and ensure only authorized access.

