import React from 'react';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Explore Our Course Offerings
            </h1>
            <p className="mx-auto max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From beginner to advanced, we have a wide range of courses to help you achieve your academic and
              professional goals. Dive into our comprehensive curriculum and unlock your full potential.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link
                to="/courses"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              >
                Explore Courses
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container grid grid-cols-1 gap-8 py-12 md:py-24 lg:py-32 px-4 md:px-6">
        <div className="grid gap-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Introduction to Computer Science",
                description: "Explore the fundamental concepts of computer science, including algorithms, data structures, and programming languages."
              },
              {
                title: "Data Structures and Algorithms",
                description: "Learn how to design and analyze efficient algorithms and data structures for solving complex problems."
              },
              {
                title: "Web Development Fundamentals",
                description: "Gain a solid foundation in HTML, CSS, and JavaScript to build responsive and interactive web applications."
              },
              {
                title: "Introduction to Machine Learning",
                description: "Explore the fundamental concepts and techniques of machine learning, including supervised and unsupervised learning."
              },
              {
                title: "Database Systems",
                description: "Learn how to design, implement, and manage relational database systems, including SQL and NoSQL databases."
              },
              {
                title: "Artificial Intelligence",
                description: "Explore the fundamental concepts and techniques of artificial intelligence, including machine learning, neural networks, and natural language processing."
              }
            ].map((course, index) => (
              <div key={index} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link to={`/course/${index + 1}`} className="block">
                  <img
                    src="/placeholder.svg"
                    alt="Course Image"
                    width={500}
                    height={300}
                    className="object-cover w-full h-48 rounded-t-lg"
                  />
                  <div className="bg-white p-6 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="font-bold text-xl">{course.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2 mt-2">
                        {course.description}
                      </p>
                    </div>
                    <div className="mt-4">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded">Enroll</button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-md text-lg">View More Courses</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;