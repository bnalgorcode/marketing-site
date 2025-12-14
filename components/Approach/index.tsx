"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Approach = () => {
  const processSteps = [
    {
      number: "01",
      title: "Project Analysis",
      description:
        "We conduct a comprehensive analysis of your requirements, business goals, target audience, and technical constraints to establish a solid foundation for your project.",
      features: [
        "Requirements gathering and documentation",
        "Stakeholder interviews and workshops",
        "Technical feasibility assessment",
        "Competitive analysis and market research",
      ],
    },
    {
      number: "02",
      title: "Strategic Planning",
      description:
        "Based on our analysis, we develop a detailed project plan with clear milestones, timelines, resource allocation, and risk mitigation strategies.",
      features: [
        "Project roadmap and timeline creation",
        "Resource planning and team allocation",
        "Risk assessment and mitigation plans",
        "Budget estimation and cost analysis",
      ],
    },
    {
      number: "03",
      title: "Implementation Approach",
      description:
        "We execute the project using agile methodologies, ensuring continuous delivery, regular feedback loops, and adaptive planning throughout the development process.",
      features: [
        "Agile development methodology",
        "Sprint planning and daily standups",
        "Continuous integration and deployment",
        "Quality assurance and testing protocols",
      ],
    },
  ];

  return (
    <>
      {/* <!-- ===== Project Progress Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="Project Progress"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="Project Progress"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="text-lg font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  Process
                </span>{" "}
                Our Project Methodology
              </span>
              <h2 className="relative mb-6 text-3xl text-black dark:text-white xl:text-hero">
                From Analysis to {" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full">
                  Implementation
                </span>
              </h2>
              <p className="mb-7.5">
                Our structured approach ensures successful project delivery
                through comprehensive analysis, strategic planning, and
                efficient implementation. We follow industry best practices to
                deliver high-quality solutions that meet your business
                objectives.
              </p>

              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-7.5 flex items-start gap-5"
                >
                  <div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-[50%] border border-stroke bg-primary/10 dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle2 font-semibold text-primary dark:text-white">
                      {step.number}
                    </p>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-metatitle2 font-semibold text-black dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                      {step.description}
                    </p>
                    <ul className="space-y-1.5">
                      {step.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2 text-sm text-body-color dark:text-body-color-dark"
                        >
                          <svg
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Project Progress End ===== --> */}

      {/* <!-- ===== Implementation Approach Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                How We Implement
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Our Development {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  Workflow
                </span>
              </h2>
              <p className="mb-7.5">
                We follow an iterative and collaborative approach that ensures
                transparency, quality, and timely delivery. Our workflow is
                designed to adapt to changing requirements while maintaining
                high standards throughout the development lifecycle.
              </p>

              <div className="space-y-5">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-stroke bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-strokedark dark:bg-blacksection"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      Sprint Planning & Execution
                    </h3>
                  </div>
                  <p className="text-sm text-body-color dark:text-body-color-dark">
                    We break down projects into manageable sprints with clear
                    deliverables, allowing for regular progress reviews and
                    adjustments.
                  </p>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-stroke bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-strokedark dark:bg-blacksection"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      Continuous Integration
                    </h3>
                  </div>
                  <p className="text-sm text-body-color dark:text-body-color-dark">
                    Automated testing and deployment pipelines ensure code
                    quality and enable rapid iteration cycles.
                  </p>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-stroke bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-strokedark dark:bg-blacksection"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      Quality Assurance
                    </h3>
                  </div>
                  <p className="text-sm text-body-color dark:text-body-color-dark">
                    Rigorous testing at every stage ensures bug-free releases and
                    maintains high standards of code quality and performance.
                  </p>
                </motion.div>
              </div>

              <div className="mt-7.5">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Start Your Project
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/about-light-02.svg"
                alt="Implementation Workflow"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="Implementation Workflow"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Implementation Approach End ===== --> */}
    </>
  );
};

export default Approach;
