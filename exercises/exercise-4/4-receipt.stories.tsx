import { storiesOf } from "@storybook/react";
import React from "react";
import { expectToLookLike, ReplaceMe } from "../util/story-helpers";
import "./styles.css";
import { ItemSummary, Annotation, Receipt } from "./code";
import {
  EntreeType,
  Protein,
  RiceType,
  BeanType,
  Topping
} from "../exercise-4/code";
import { StaticExample } from "./example";

storiesOf("Exercise 4.4: The full Receipt", module)
  .add("Intro", () => (
    <div>
      <h1>Create a Receipt Component</h1>
      <p>
        Let's start by creating an Icon component that we can use to render our
        emoji icons.
      </p>
    </div>
  ))
  .add(
    "Static example 1",
    expectToLookLike(
      // Something that looks like:
      <StaticExample />,

      // Should be produced by:
      () => (
        <ReplaceMe />
        // with

        // <Receipt
        //   subtotal={24}
        //   tip={3.6}
        //   total={27.6}
        //   items={[
        //     {
        //       basePrice: 7,
        //       entreeType: "taco",
        //       mindBlowing: true,
        //       itemTotal: 9,
        //       additions: [
        //         {
        //           additionType: "carnitas",
        //           additionPrice: 1,
        //           annotation: Annotation.Pricey
        //         },
        //         {
        //           additionType: BeanType.PintoBeans,
        //           additionPrice: 0
        //         },
        //         {
        //           additionType: "brownRice",
        //           additionPrice: 0
        //         },
        //         {
        //           additionType: Protein.Beef,
        //           additionPrice: 1,
        //           annotation: Annotation.Nuclear
        //         }
        //       ]
        //     },
        //     {
        //       basePrice: 6,
        //       entreeType: "taco",
        //       mindBlowing: false,
        //       itemTotal: 6,
        //       additions: [
        //         {
        //           additionType: "chicken",
        //           additionPrice: 0
        //         },
        //         {
        //           additionType: Topping.Peppers,
        //           additionPrice: 0
        //         },
        //         {
        //           additionType: Topping.Mayo,
        //           additionPrice: 0
        //         }
        //       ]
        //     }
        //   ]}
        // />
      )
    )
  )
  .add("Your example 1", () => <ReplaceMe />)
  .add("Your example 2", () => <ReplaceMe />);
