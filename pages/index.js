import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Button from "../components/Button";
import Icon from "../components/Icon";
import ServiceMap from "../components/ServiceMap";
import Testimonial from "../components/Testimonial";
import { BURNT_ORANGE } from "../constants/colors";
import { EMAIL, PHONE } from "../constants/external";
import testimonials from "../constants/testimonials";

const iconStyle = {
  margin: "0 .25rem"
};
const randomNumber = (max, used) => {
  const number = Math.floor(Math.random() * max);
  return !used.includes(number) ? number : randomNumber(max, used);
};
const randomTestimonials = (list, count) => {
  const picked = [];
  const length = list.length;
  for (let i = 0; i < count; i++) {
    picked.push(randomNumber(length, picked));
  }

  return picked.map(idx => list[idx]);
};

export default () => (
  <Layout title="home page">
    <Banner imagepath="/static/img/lizard.jpg">
      <h1>Reptiles need love too!</h1>
      <h2>
        <Icon icon="heart" style={iconStyle} />
        <Icon icon="heart" style={iconStyle} />
        <Icon icon="heart" style={iconStyle} />
      </h2>
      <p>
        Everyone thinks puppies and kittens are cute but lizards, snakes, rats,
        and other "creepy-crawlies" are cute too.
      </p>
      <article>
        <Button href={PHONE}>call me</Button>
        <Button href={EMAIL}>email me</Button>
      </article>
    </Banner>
    <main>
      <section>
        <h1>All breeds, all species!</h1>
        <p>
          With over 10 years of exotic pet care experience, I am the best choice
          for short and long term care for your snakes, lizards, pocket pets,
          cats, and dogs.
        </p>
      </section>

      <section>
        <h1>Pet Sitting</h1>
        <p>
          Leaving your pet while you're away can be stressful. Consider hiring a
          professional to care for your pet and{" "}
          <a
            href="https://youtu.be/NT1tZmGvFfY"
            target="_blank"
            rel="noopener noreferrer"
          >
            dance your cares away.
          </a>
        </p>
      </section>

      <section>
        <h1>Dog Walking</h1>
        <p>
          Dogs love going for walks at all times of the day and night; turns out
          I do too! If you need your dog taken for a walk at morning, noon, or
          night,{" "}
          <a
            href="https://youtu.be/Niu9Zmrx0p8"
            target="_blank"
            rel="noopener noreferrer"
          >
            I'll be there for you.
          </a>
        </p>
      </section>
    </main>
    <section>
      <h1>Service Area</h1>
      <p>Servicing the Mississauga area.</p>
      <ServiceMap />
    </section>
    <main>
      <section className="testimonials">
        <h1>What people say...</h1>
        <section className="content">
          {randomTestimonials(testimonials, 3).map(({ id, text }) => (
            <Testimonial key={id} by={id}>
              {text}
            </Testimonial>
          ))}
        </section>
      </section>
    </main>
    <Banner
      imagepath="/static/img/cathy-and-jack.jpg"
      style={{
        backgroundPosition: "top center",
        height: "30vh"
      }}
    >
      <article>
        <Button href={PHONE}>call me</Button>
        <Button href={EMAIL}>email me</Button>
      </article>
    </Banner>
    <style jsx>
      {`
        section {
          text-align: center;
          margin: 0 auto;
        }

        section.content {
          text-align: left;
        }

        a {
          color: ${BURNT_ORANGE};
        }

        @media (min-width: 1025px) {
          main {
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
          }

          section.content {
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
            text-align: center;
          }
        }
      `}
    </style>
  </Layout>
);
