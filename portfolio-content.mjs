export const projects = [
  {
    "slug": "mood",
    "title": "Mood",
    "category": "Mobile UX · Event discovery",
    "role": "UX design and prototyping",
    "format": "Low- and mid-fidelity wireframes, high-fidelity prototype",
    "summary": "A mobile booking prototype that takes people from browsing events to finding their ticket at the venue.",
    "deck": "I designed Mood around a night out. The app helps people find an event that fits their plans, book a ticket, and pull it up when they arrive.",
    "cover": [
      "mood-home",
      "mood-events",
      "mood-tickets"
    ],
    "tone": "purple",
    "overview": "I worked from guidelines my instructor provided for a mock client. In low fidelity, I mapped the path from browsing to checkout and ticket retrieval. I used mid-fidelity wireframes to refine what information and actions belonged on each screen before building the full prototype in Figma.",
    "sections": [
      {
        "title": "Start with the booking flow",
        "text": "I sketched the main path first, from finding an event to choosing tickets and checking out. I put confirmation and saved tickets into the wireframes early so I could see how someone would get back to their booking later.",
        "images": [
          [
            "mood-low-events",
            "Low-fidelity event listing"
          ],
          [
            "mood-low-filters",
            "Early filter structure"
          ],
          [
            "mood-low-detail",
            "Low-fidelity event details"
          ]
        ]
      },
      {
        "title": "Keep active filters visible",
        "text": "My first filter screen used days of the week. In the later prototype, I added a date range, genre, and venue so someone could search around a real plan. I kept the active filters visible as chips on the results screen so people could see what was narrowing the list without reopening the filter panel.",
        "images": [
          [
            "mood-home",
            "Mood home screen"
          ],
          [
            "mood-events",
            "Event discovery"
          ],
          [
            "mood-filters",
            "Date, genre, and venue filters"
          ],
          [
            "mood-filtered",
            "Results with applied filters"
          ]
        ]
      },
      {
        "title": "Make the ticket easy to find later",
        "text": "I designed a purchase confirmation and a dedicated Tickets screen for the moment someone needs to show their ticket. I also included an empty account state for people who haven’t booked yet, so the prototype covers both first-time and returning use.",
        "images": [
          [
            "mood-detail",
            "Event details and ticket selection"
          ],
          [
            "mood-checkout",
            "Checkout"
          ],
          [
            "mood-confirmation",
            "Purchase confirmation"
          ],
          [
            "mood-tickets",
            "Saved tickets"
          ],
          [
            "mood-empty-account",
            "Account empty state"
          ]
        ]
      }
    ],
    "outcome": "The prototype gave me a way to review the whole journey as one experience. If I ran a usability test, I’d ask someone to find an event for a specific date, book a ticket, then leave the confirmation screen and find their ticket again. I’d watch for hesitation at the filters and check where they go first to look for the ticket.",
    "source": "Individual academic project · Simulated client brief · Figma prototype",
    "focus": "Translate a project brief into a complete booking flow, including what happens after checkout."
  },
  {
    "slug": "bakery",
    "title": "Rose Family Bakery POS",
    "category": "Product UX · Tablet ordering",
    "role": "UX design and wireframing",
    "format": "Low- and mid-fidelity tablet wireframes",
    "summary": "A tablet point-of-sale flow for taking, checking, and charging for custom cake orders.",
    "deck": "Taking a custom cake order is a conversation. I designed a tablet workflow that lets staff keep track of the details while they talk with the customer.",
    "cover": [
      "bakery-low-dashboard"
    ],
    "tone": "peach",
    "overview": "At the counter, someone has to confirm the date, pick the cake options, get the message right, and explain the price. I used low- and mid-fidelity wireframes to work out when staff need each piece of information and what they should be able to see as the order takes shape.",
    "sections": [
      {
        "title": "Check the date before customizing the cake",
        "text": "The bakery brief calls for at least 48 hours’ notice and allows orders up to 60 days ahead. I put scheduling before product selection so staff can confirm the pickup date before spending time talking through flavors, sizes, and decorations.",
        "images": [
          [
            "bakery-low-dashboard",
            "Low-fidelity dashboard"
          ],
          [
            "bakery-low-products",
            "Early product selection"
          ]
        ]
      },
      {
        "title": "Keep the running order in view",
        "text": "While staff enter size, flavor, theme, quantity, and a message of up to 50 characters, the current order stays beside the options. If a customer asks what they’ve already chosen, staff can check the summary without leaving the screen.",
        "images": [
          [
            "bakery-order-type",
            "Mid-fidelity order setup"
          ],
          [
            "bakery-products",
            "Product selection and current order"
          ],
          [
            "bakery-customize",
            "Cake customization"
          ]
        ]
      },
      {
        "title": "Give staff a chance to catch mistakes",
        "text": "I gave order review its own step before payment. Staff can read the details back to the customer, change or remove an item, and explain the subtotal, delivery charge, and total while there’s still time to make a correction.",
        "images": [
          [
            "bakery-low-review",
            "Low-fidelity order review"
          ],
          [
            "bakery-review",
            "Mid-fidelity order review"
          ],
          [
            "bakery-confirmation",
            "Order confirmation"
          ]
        ]
      }
    ],
    "outcome": "The wireframes show how the scheduling rules, running order, and review step fit together. I’d test the flow with bakery staff using an order that needs a changed cake option and an earlier pickup date. I’d watch whether they spot the timing issue and can correct the order without losing the details they already entered.",
    "source": "Individual academic project · Low- and mid-fidelity Figma wireframes",
    "focus": "Turn bakery rules into a workflow staff can follow during a conversation."
  },
  {
    "slug": "art-history",
    "title": "Journey Through Design",
    "category": "Team UX project · Art discovery",
    "role": "Design contributor and usability tester",
    "format": "Wireframes, shared design system, and interactive prototype",
    "summary": "My first team design project, an art discovery app we took from wireframes to a full prototype.",
    "deck": "Journey Through Design was my first time designing a product with a team. We built an art discovery app that connects design movements, artists, and their work.",
    "cover": [
      "art-history-home"
    ],
    "tone": "blue",
    "overview": "One person might come to learn about a period. Someone else might already know the name of an artist. Our team designed for both kinds of exploration, starting with low-fidelity wireframes, refining the screens at mid fidelity, and building a full interactive prototype in Figma.",
    "credit": "I contributed to the design and ran usability testing as part of GIT 540 Team 9. The screens and design system are shared team work. The session notes shown here are from testing I conducted.",
    "sections": [
      {
        "title": "Design for browsing and searching",
        "text": "We used a timeline for people who wanted to explore a period and search for people who had a name or subject in mind. Filters narrowed the collection. Since those routes could lead to the same artist or artwork, we also had to consider where someone would expect to go when they went back.",
        "images": [
          [
            "art-history-timeline",
            "Timeline exploration — team design"
          ],
          [
            "art-history-filters",
            "Collection filters — team design"
          ]
        ]
      },
      {
        "title": "Notice where people hesitate",
        "text": "In a mid-fidelity test I ran, a participant completed the first task and still said “going back” was confusing. My notes also captured uncertainty around filters. Those moments gave us concrete things to review, including where to put return links and how to show that a filter had been applied.",
        "images": [
          [
            "art-history-testing-notes",
            "Mid-fidelity testing notes credited to Darrell"
          ],
          [
            "art-history-artist",
            "Artist page — team design"
          ]
        ]
      },
      {
        "title": "Keep the screens consistent as a team",
        "text": "We used shared type, color, navigation, and controls so the timeline, search, and detail pages would feel related as the prototype came together. In later sessions, I documented people successfully navigating the gallery, search, timeline filters, and artwork. I’d still revisit the earlier points of confusion in another round of testing.",
        "images": [
          [
            "art-history-typography",
            "Shared typography system"
          ],
          [
            "art-history-colors",
            "Shared color palette"
          ],
          [
            "art-history-search",
            "Search — team design"
          ],
          [
            "art-history-artwork",
            "Artwork detail — team design"
          ]
        ]
      }
    ],
    "outcome": "Working with other designers taught me the value of shared patterns, especially when several screens have to feel like one experience. Testing taught me to look for hesitation even when someone finished a task. I’d retest the same browsing tasks with new participants and watch whether they can return to the previous view and tell which filters are active without help.",
    "source": "Collaborative academic project · GIT 540 Team 9 · Figma",
    "focus": "Work within a shared design system and bring usability observations back to the team."
  },
  {
    "slug": "ai-driving",
    "title": "AI Driving",
    "category": "Capstone · Web design and development",
    "role": "UX design and front-end development",
    "format": "Four-page website and design process report",
    "summary": "A capstone website for a fictional autonomous vehicle company, built to make its services easier to understand.",
    "deck": "For my capstone, I designed and coded a website for a fictional autonomous vehicle company. I wanted to apply my UX and web design skills to an industry I’d like to work in.",
    "cover": [
      "/assets/ai-driving.png"
    ],
    "tone": "green",
    "overview": "I got interested in automated vehicles by paying attention to how differently people make decisions on the road. I want to work on the part of vehicle automation people interact with. I’m curious about how we explain what the technology does, help people understand its limits, and make it easier to use in everyday life. For this project, I started with the website a person might visit to learn about the company and its services.",
    "sections": [
      {
        "title": "Define what each page needs to do",
        "text": "I started with an HTML prototype so I could work through the navigation and decide where the calls to action and images belonged. Home introduces the company, About provides context, Services explains its offerings, and Contact gives interested visitors a clear next step."
      },
      {
        "title": "Refine the layout in the browser",
        "text": "I built the site in HTML and CSS and checked it on a laptop, desktop, and phone. Seeing it at different sizes helped me adjust how the navigation, text, and images fit together. I used a consistent blue and gray palette across the four pages."
      },
      {
        "title": "Explore the site and process report",
        "text": "My capstone report covers the early HTML prototype, device checks, and visual refinements. You can try the navigation and contact form on the demo site. The form is for demonstration only."
      }
    ],
    "outcome": "Building the site gave me practice turning an interest in vehicle automation into something people could explore. I’d test whether a first-time visitor can find a service and explain it in their own words. Longer term, I’d like to bring the same approach to onboarding and in-vehicle interfaces, where people need to know what an automated feature is doing and when it needs their attention.",
    "source": "Individual capstone · HTML and CSS · Fictional autonomous vehicle company",
    "focus": "Make a technical subject easier to explore through clear navigation and page structure."
  },
  {
    "slug": "loaded-accessibility",
    "title": "Loaded Accessibility Review",
    "category": "Accessibility · Interface analysis",
    "role": "Accessibility review and annotation",
    "format": "Annotated Figma reconstructions",
    "summary": "An accessibility review that follows an online shopper from the homepage through checkout.",
    "deck": "I recreated three pages from Loaded in Figma and marked specific places where shoppers could run into accessibility barriers.",
    "cover": [
      "loaded-homepage"
    ],
    "tone": "lime",
    "overview": "I followed the shopping flow from the homepage to a product page and into checkout. I wanted each note to point to something a teammate could find on the screen, so I used lettered markers tied to a shared legend.",
    "sections": [
      {
        "title": "Tie each concern to a specific element",
        "text": "On each page I looked at contrast, alternative text, visible keyboard focus, form labels, and heading hierarchy. The shared legend makes it possible to find a concern and compare how the same type of element is handled elsewhere in the flow.",
        "images": [
          [
            "loaded-homepage",
            "Annotated homepage reconstruction"
          ],
          [
            "loaded-legend",
            "Accessibility annotation legend"
          ]
        ]
      },
      {
        "title": "Start the browser checks at checkout",
        "text": "At checkout, a shopper needs to know what each field asks for and which control has focus. I marked those elements in the reconstruction so I could return to the corresponding page and check how the form actually behaves with a keyboard.",
        "images": [
          [
            "loaded-product",
            "Annotated product page"
          ],
          [
            "loaded-checkout",
            "Annotated checkout"
          ]
        ]
      }
    ],
    "outcome": "The annotated screens give a design or engineering teammate a place to start. I’d follow up in the browser by measuring contrast, checking headings and text alternatives, and navigating checkout using only a keyboard. Then I could turn any confirmed barriers into specific fixes and retest them.",
    "source": "Independent academic design review of loaded.com · Figma reconstructions",
    "focus": "Document where a barrier might occur and what to check in the browser."
  },
  {
    "slug": "phoenix",
    "title": "City of Phoenix",
    "category": "Responsive UX · Wireframe study",
    "role": "Responsive layout analysis and wireframing",
    "format": "Desktop and mobile homepage wireframes",
    "summary": "A wireframe study of how a city homepage organizes everyday services on desktop and mobile.",
    "deck": "I recreated the City of Phoenix homepage at two screen sizes to see how it helps people find services amid city announcements, news, and resources.",
    "cover": [
      "phoenix-desktop",
      "phoenix-mobile"
    ],
    "tone": "sand",
    "overview": "Someone who needs to report a problem is looking for something different from someone browsing local news. I recreated the homepage in low fidelity so I could compare how those tasks are grouped and what appears first on desktop and mobile.",
    "sections": [
      {
        "title": "Find the shortcuts residents rely on",
        "text": "On desktop, I looked at how the page groups tasks like paying a bill, reporting an issue, and finding trash pickup information. Those shortcuts sit alongside heat relief information, city news, and government resources. Redrawing the layout made it easier to see which tasks have a direct entry point.",
        "images": [
          [
            "phoenix-desktop",
            "Full desktop wireframe · 1440 px wide"
          ]
        ],
        "long": true
      },
      {
        "title": "Compare what comes first on mobile",
        "text": "I compared a 1440 px desktop layout with a 390 px mobile layout. On a narrow screen, more of the content has to stack vertically, so the order of the sections plays a bigger role in what people find before they scroll.",
        "images": [
          [
            "phoenix-mobile",
            "Full mobile wireframe · 390 px wide"
          ]
        ],
        "long": true
      }
    ],
    "outcome": "The two layouts make it easier to compare what residents see first at each width. If I took this into a redesign, I’d test a few common mobile tasks, such as reporting a problem or finding heat relief, and watch where people look first. That would give the team a basis for deciding which shortcuts should move up.",
    "source": "Independent academic recreation of the City of Phoenix homepage · Desktop and mobile Figma wireframes",
    "focus": "Use wireframes to discuss which services should be easiest to find across screen sizes."
  }
];
