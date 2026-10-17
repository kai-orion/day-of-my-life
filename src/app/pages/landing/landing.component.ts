import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

interface ReportHighlight {
  readonly title: string;
  readonly body: string;
}

const TITLE = 'Day of My Life — see how much of your life you have actually lived';
const DESCRIPTION =
  'Turn your birth date and expected lifespan into a subjective life report: days lived and remaining, perceived age, life stages and the milestones ahead. Free, private and computed entirely in your browser.';

/**
 * Public landing page and the only indexable route. It is prerendered to static
 * HTML at build time (see `routers/app.routes.server.ts`), so the copy below is
 * written to be meaningful to search engines and to a first-time visitor alike.
 */
@Component({
  selector: 'page-landing',
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  private readonly seo = inject(SeoService);

  protected readonly steps: readonly ReportHighlight[] = [
    {
      title: 'Pick your birth date',
      body: 'Everything in the report is anchored to the day you were born.',
    },
    {
      title: 'Set an expected lifespan',
      body: 'Start from your country’s average life expectancy, or enter your own number.',
    },
    {
      title: 'Read your life report',
      body: 'Days lived and left, perceived age, the milestones ahead and how you compare.',
    },
  ];

  protected readonly highlights: readonly ReportHighlight[] = [
    {
      title: 'Days lived and days left',
      body: 'The same life measured in days, weeks, summers, weekends, full moons and hours.',
    },
    {
      title: 'Perceived age',
      body: 'Where you sit on the subjective clock, not only on the calendar.',
    },
    {
      title: 'Perceived progress',
      body: 'Calendar progress and felt progress, placed side by side so the gap is visible.',
    },
    {
      title: 'Life stages',
      body: 'How much of your felt life each stage — before memory, school, work, retirement — holds.',
    },
    {
      title: 'Milestones',
      body: 'Birthdays, school, retirement and family nodes projected forward from your birthday.',
    },
    {
      title: 'How you compare',
      body: 'Your expected lifespan set against reference life expectancies around the world.',
    },
  ];

  protected readonly faqs: readonly FaqItem[] = [
    {
      question: 'Is my data private?',
      answer:
        'Yes. Your birth date and lifespan are stored only in your browser’s local storage. Nothing is uploaded, there is no account, and you can clear the values at any time.',
    },
    {
      question: 'How is perceived age calculated?',
      answer:
        'The model combines a logarithmic age density — perception proportional to one over age plus an offset — with a weight for each life stage, integrated across your expected lifespan. The result is the felt share of life you have already spent.',
    },
    {
      question: 'Where do the life-expectancy numbers come from?',
      answer:
        'Country figures are rounded WHO and UN World Population Prospects estimates, both sexes combined. Education, retirement and family ages follow OECD and UNESCO indicators plus national pension ages. They are population averages, not statements about you.',
    },
    {
      question: 'Can I use my own lifespan instead of a country average?',
      answer:
        'Yes. Choose a country to start from its average, then adjust the number to anything between 1 and 130 years.',
    },
    {
      question: 'Is this a prediction of when I will die?',
      answer:
        'No. Day of My Life is a reflective estimate of how time is experienced — not a medical or actuarial forecast.',
    },
  ];

  constructor() {
    this.seo.apply({
      title: TITLE,
      description: DESCRIPTION,
      path: '/',
      robots: 'index,follow',
      structuredData: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebApplication',
            name: 'Day of My Life',
            applicationCategory: 'LifestyleApplication',
            operatingSystem: 'Any',
            url: '/',
            description: DESCRIPTION,
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: this.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          },
        ],
      },
    });
  }
}
