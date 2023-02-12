import { defineStore } from "pinia";

export const useEventStore = defineStore({
  id: "event",
  state: () => ({
    forexData: [
      {
        title: "How Forex works: brokers, liquidity, volatility",
        mainHeading: "Forex basics: video course",
        headingContent:
          "This video course for beginners will guide you through the main aspects of Forex trading. You will learn how the Forex market works and how you can profit from it. Study the essential Forex terminology, learn how to take your first steps in trading, and start developing your trading strategy.",
        vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
        body: 'In this lesson, you will learn to: <ul class="list-group "><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li><li class="list-group-item">A fourth item</li><li class="list-group-item">And a fifth one</li></ul>',
      },
      {
        title:
          "Forex concepts: currency pairs, pips and points, lots, profit calculator",

        mainHeading: "Forex basics: video course",
        headingContent:
          "This video course for beginners will guide you through the main aspects of Forex trading. You will learn how the Forex market works and how you can profit from it. Study the essential Forex terminology, learn how to take your first steps in trading, and start developing your trading strategy.",
        vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
        body: 'In this lesson, you will learn to: <ul class="list-group "><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li><li class="list-group-item">A fourth item</li><li class="list-group-item">And a fifth one</li></ul>',
      },
      {
        title:
          "How to earn more with leverage: margin, margin call and stop out, equity",

        mainHeading: "Forex basics: video course",
        headingContent:
          "This video course for beginners will guide you through the main aspects of Forex trading. You will learn how the Forex market works and how you can profit from it. Study the essential Forex terminology, learn how to take your first steps in trading, and start developing your trading strategy.",
        vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
        body: 'In this lesson, you will learn to: <ul class="list-group "><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li><li class="list-group-item">A fourth item</li><li class="list-group-item">And a fifth one</li></ul>',
      },
      {
        title: "How candlestick charts work, and what timeframe to choose",
        mainHeading: "Forex basics: video course",
        headingContent:
          "This video course for beginners will guide you through the main aspects of Forex trading. You will learn how the Forex market works and how you can profit from it. Study the essential Forex terminology, learn how to take your first steps in trading, and start developing your trading strategy.",
        vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
        body: 'In this lesson, you will learn to: <ul class="list-group "><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li><li class="list-group-item">A fourth item</li><li class="list-group-item">And a fifth one</li></ul>',
      },
      {
        title:
          "Trading costs and hidden charges: spread, swap, volume commission",
        mainHeading: "Forex basics: video course",
        headingContent:
          "This video course for beginners will guide you through the main aspects of Forex trading. You will learn how the Forex market works and how you can profit from it. Study the essential Forex terminology, learn how to take your first steps in trading, and start developing your trading strategy.",
        vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
        body: 'In this lesson, you will learn to: <ul class="list-group "><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li><li class="list-group-item">A fourth item</li><li class="list-group-item">And a fifth one</li></ul>',
      },
      {
        title:
          "How to place pending orders, Stop Loss, and Take Profit to save your time",
        mainHeading: "Forex basics: video course",
        headingContent:
          "This video course for beginners will guide you through the main aspects of Forex trading. You will learn how the Forex market works and how you can profit from it. Study the essential Forex terminology, learn how to take your first steps in trading, and start developing your trading strategy.",
        vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
        body: 'In this lesson, you will learn to: <ul class="list-group "><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li><li class="list-group-item">A fourth item</li><li class="list-group-item">And a fifth one</li></ul>',
      },
    ],
    faqData: [
      {
        title: "ACCOUNT OPENING",
        sections: [
          {
            title: "HOW DO I SIGN UP?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title:
              "I ALREADY HAVE A PROFILE IN OCTAFX. HOW CAN I CREATE A NEW ACCOUNT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT TYPE OF ACCOUNT SHOULD I CHOOSE?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT LEVERAGE SHOULD I SELECT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "HOW DO I SIGN UP HEREEEE?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title:
              "I ALREADY HAVE A PROFILE IN OCTAFX. HOW CAN I CREATE A NEW ACCOUNT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT TYPE OF ACCOUNT SHOULD I CHOOSE?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT LEVERAGE SHOULD I SELECT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
        ],
      },
      {
        title: "PERSONAL AREA",
        sections: [
          {
            title: "HOW DO I SIGN UP HEREEEE?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title:
              "I ALREADY HAVE A PROFILE IN OCTAFX. HOW CAN I CREATE A NEW ACCOUNT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT TYPE OF ACCOUNT SHOULD I CHOOSE?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT LEVERAGE SHOULD I SELECT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "HOW DO I SIGN UP HEREEEE?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title:
              "I ALREADY HAVE A PROFILE IN OCTAFX. HOW CAN I CREATE A NEW ACCOUNT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT TYPE OF ACCOUNT SHOULD I CHOOSE?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT LEVERAGE SHOULD I SELECT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
        ],
      },
      {
        title: "PERSONAL INFORMATION AND ACCESS DATA",
        sections: [
          {
            title: "HOW DO I SIGN UP?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title:
              "I ALREADY HAVE A PROFILE IN OCTAFX. HOW CAN I CREATE A NEW ACCOUNT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT TYPE OF ACCOUNT SHOULD I CHOOSE?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT LEVERAGE SHOULD I SELECT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "HOW DO I SIGN UP HEREEEE?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title:
              "I ALREADY HAVE A PROFILE IN OCTAFX. HOW CAN I CREATE A NEW ACCOUNT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT TYPE OF ACCOUNT SHOULD I CHOOSE?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT LEVERAGE SHOULD I SELECT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
        ],
      },
      {
        title: "PROFILE VERIFICATION",
        sections: [
          {
            title: "HOW DO I SIGN UP?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title:
              "I ALREADY HAVE A PROFILE IN OCTAFX. HOW CAN I CREATE A NEW ACCOUNT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT TYPE OF ACCOUNT SHOULD I CHOOSE?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT LEVERAGE SHOULD I SELECT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "HOW DO I SIGN UP HEREEEE?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title:
              "I ALREADY HAVE A PROFILE IN OCTAFX. HOW CAN I CREATE A NEW ACCOUNT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT TYPE OF ACCOUNT SHOULD I CHOOSE?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT LEVERAGE SHOULD I SELECT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
        ],
      },
      {
        title: "PROFILE VERIFICATION",
        sections: [
          {
            title: "HOW DO I SIGN UP?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title:
              "I ALREADY HAVE A PROFILE IN OCTAFX. HOW CAN I CREATE A NEW ACCOUNT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT TYPE OF ACCOUNT SHOULD I CHOOSE?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT LEVERAGE SHOULD I SELECT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "HOW DO I SIGN UP HEREEEE?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title:
              "I ALREADY HAVE A PROFILE IN OCTAFX. HOW CAN I CREATE A NEW ACCOUNT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT TYPE OF ACCOUNT SHOULD I CHOOSE?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
          {
            title: "WHAT LEVERAGE SHOULD I SELECT?",
            body: `<ol><li>1. Visit the&nbsp;<a href="https://www.octafx.com/education/faq/category/account-opening/question/1/" rel="noopener noreferrer" target="_blank" style="color: var(--color-primary,#6fdcff); background-color: rgba(0, 0, 0, 0);">signup page</a>, fill it out, and press&nbsp;<strong>Open Account</strong>&nbsp;or link via your social media profile.</li><li>2. Find our message titled&nbsp;<strong>Confirm Your Email Address</strong>&nbsp;in your inbox, open it, and press&nbsp;<strong>Confirm Email</strong>—you will be redirected to our site.</li><li>3. Fill in all the required information and press&nbsp;<strong>Continue</strong>. Next, finish setting up your trading account, and you're ready to go.</li></ol><p><br></p>`,
            vedioUrl: "https://www.youtube.com/embed/idq0UMulc6g",
          },
        ],
      },
    ],
    showOpenAccountDrawer: false,
    openLoginModal: false,
    currentWebinar: null,
  }),
  getters: {
    forexGetter() {
      return this.forexData;
    },
    faqGetter() {
      return this.faqData;
    },
  },
  actions: {
    createForexBasic(payload) {
      const { title, mainHeading, headingContent, vedioUrl, body } = payload;
      let data = {
        headingContent: headingContent,
        mainHeading: mainHeading,
        vedioUrl: vedioUrl,
        body: body,
      };
      let newForexData = {
        title: title,
        content: data,
      };
      this.forexData.push(newForexData);
    },
    deleteForexBasic(id) {
      let newData = [];
      this.forexData.forEach((item, index) => {
        if (index != id) {
          newData.push(item);
        }
      });
      this.forexData = newData;
    },
    addNewForex() {
      this.forexData.push({
        title: "",
        mainHeading: "",
        headingContent: "",
        vedioUrl: "",
        body: "",
      });
    },
    updateForex(index, payload) {
      this.forexData[index] = payload;
    },
  },
  persist: true,
});
