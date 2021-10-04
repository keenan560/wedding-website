import React from "react";
import "./Story.css";
import when from "../assets/2016.jpeg";
import tsc from "../assets/tsc.jpeg";
// import how from "../assets/how.jpg";
import outcome from "../assets/outcome.jpg";
import centralpark from "../assets/centralpark.jpeg";

function Story() {
  return (
    <div className="story__container">
      <h1 className="story__title">Our Story</h1>
      <div className="story__when">
        <p className="story__when__text">
          We could always start this story like most of them do, Once Upon a
          time in a faraway land…. But we won’t because ours is far from a fairy
          tale. As individuals, we were both on fire for the Lord and had
          embarked on a personal journey with Him, trying to draw closer and
          nearer to our Lord and Savior. That’s exactly where our story begins.
        </p>
        <img
          className="story__when__img img-thumbnail shadow animate__animated animate__fadeIn animate__slower"
          src={when}
          alt="when"
        />
      </div>
      <div className="story__where">
        <img
          className="story__where__img img-thumbnail shadow animate__animated animate__fadeIn animate__slower"
          src={tsc}
          alt="where"
        />
        <p className="story__where__text">
          We met in Times Square Church in early 2016. We had crossed paths
          briefly through a mutual friend in Mcdonalds, right next to church. A
          few weeks later, we met again at Broadway Thai, a restaurant by
          church. It was a complete coincidence but we had a great time talking
          and learning more about each other.
        </p>
      </div>
      <div className="story__how">
        <p className="story__how__text">
          After this second encounter, we kept running into each other at
          church, which had never happened before. We knew from the beginning
          that we had a lot of chemistry and we were both very attracted to each
          other. There was no denying that. After a few months, we decided to
          start dating, and with this decision came a lot of storms. Remember at
          the beginning of this story we said it was far from a fairy tale?
          Right! This is why. Right after making the decision to date and see
          where God would take this relationship, we faced many trials and
          tribulations. We found ourselves in situations we were not expecting.
          We quickly realized that our reactions to each of those situations was
          crucial, and would be a determining factor for the future of this
          relationship. We will not lie, there were many times we discussed the
          option of calling it quits and going our separate ways. However, God
          had a different plan for us. Each time we had that conversation, God
          had a way of bringing us back together. It didn’t take long for us to
          realize that we were meant to be with each other, as God was going to
          use us in each other’s lives.
        </p>
        <img
          src={centralpark}
          className="story__how__img img-thumbnail shadow animate__animated animate__fadeIn animate__slower"
          alt="park"
        />
      </div>
      <div className="story__outcome">
        <img
          src={outcome}
          className="story__outcome__img img-thumbnail shadow animate__animated animate__fadeIn animate__slower"
          alt="outcome"
        />
        <p className="story__outcome__text">
          Fast forward to 2021, we have bravely overcome each and every storm
          that has come our way. What’s our secret you ask? We decided from the
          very beginning that God would be the center and foundation of our
          relationship and that we would allow Him to guide us. We’ve been
          together for almost 6 years now, have 4 kids, changed jobs, moved to a
          different state, and have overcome it all. No, it has not always been
          easy but our commitment to God and to each other remains and quitting
          is not and never will be an option for us. No matter the issue, the
          storm, the obstacle or the challenge, we are committed to working
          through it and finding a solution. Communication has always been a
          priority, even though sometimes we still struggle with this one.
          Together, with God, we have learned selflessness, patience,
          unconditional love, forgiveness and much more. Our story and our
          relationship truly reflects this very well known bible passage from 1
          Corinthians 13:4-8, “Love is patient, love is kind. It does not envy,
          it does not boast, it is not proud. It does not dishonor others, it is
          not self-seeking, it is not easily angered, it keeps no record of
          wrongs. Love does not delight in evil but rejoices with the truth”.
          God has broken us down individually and as a couple, and He has been
          teaching us how to truly love one another. Thank you for reading and
          being a part of our lives. We are blessed and grateful for you, and
          our prayer is that God blesses you as He has blessed us.
        </p>
      </div>
    </div>
  );
}

export default Story;
