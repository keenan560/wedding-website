import React from "react";
import Button from "@material-ui/core/Button";
import "./Questions.css";

const questions = [
  {
    question: "How long should I look to stay?",
    answer:
      "The wedding ceremony and reception will take place on Saturday April 30th, 2022. It's up to each guest to decide how long they would like to stay. Diana and Keenan are required to be at the resort 3 days in advance. However guests are not required to arrive ahead of the bride and groom, nor are guest required to stay as long as the bride and groom.",
  },
  {
    question: "Is the resort all inclusive?",
    answer:
      "Yes. The resort is all inclusive. Wedding guests do not have to worry about extra fees related to food, as it is included in the booking price.",
  },
  {
    question: "How can I iron my dress/suit the day of the wedding?",
    answer:
      "For a small fee, the resort provides special ironing and tailoring services for wedding guests.",
  },
  {
    question:
      "Is there is a discount for wedding guests who want to stay at the resort?",
    answer:
      "Yes. There is a discount on room reservation for those who wish to stay at the resort. For the discount please email Arisquelmy Rosario at groups.drepc@dreamsresorts.com",
  },
  {
    question: "Does the resort provide babysitting services?",
    answer:
      "Yes. For an additional fee, babysitting is available upon request.",
  },
  {
    question: "Can I choose to stay at a different resort/hotel?",
    answer:
      "Yes. You may choose to stay at a different resort/hotel. We ask that you let us know in advance in order to make proper accommodations such as a guest pass for the day of the wedding.",
  },
  {
    question: "Is there a wedding registry?",
    answer:
      "Having your presence at our wedding is the best gift that we can ask for. We do not have a registry; however if you still would like to bless us with a gift, we are asking for cash donations which would go towards our future honeymoon or activities at the resort.",
  },
  {
    question: "What kind of weather should I be expecting in April?",
    answer:
      "Being an island, the Dominican Republic is hot for the most part year-round. April is not a part of the hurricane season. Therefore expect sunshine and heat.",
  },
  {
    question: "What is the website address to the resort?",
    answer: (
      <Button
        id="website-link"
        type="button"
        className="home__button"
        href="https://www.dreamsresorts.com/en_us/resorts/dominican-republic/punta-cana.html"
        target="_blank"
      >
        Dreams Resorts & Spa.
      </Button>
    ),
  },
];

function Questions() {
  return (
    <div className="questions__container mx-5">
      <h1 className="questions__title">Frequently Asked Questions</h1>

      {questions.map((item, idx) => (
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div
              className="card-header card-header-questions"
              id={"heading" + idx}
            >
              <h2 className="mb-0">
                <Button
                  className="collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target={"#collapse" + idx}
                  aria-expanded="false"
                  aria-controls={"collapse" + idx}
                >
                  {item.question}
                </Button>
              </h2>
            </div>

            <div
              id={"collapse" + idx}
              className="collapse"
              aria-labelledby={"heading" + idx}
              data-parent="#accordionExample"
            >
              <div className="card-body card-body-questions">{item.answer}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Questions;
