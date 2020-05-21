/* eslint-disable quote-props */
/* eslint-disable quotes */
const express = require('express');
const sgMail = require('@sendgrid/mail');
const { check, validationResult } = require('express-validator');

const router = new express.Router();

router.get('/', (req, res) => {
  res.render('index.hbs', {
    title: 'Park Visalia Assisted Living & Memory Care',
    description: 'Welcome to Park Visalia, an assisted living and memory care senior living community in Visalia, California. Park Visalia offers an engaging and varied lifestyle that empowers individuals to enjoy creative pursuits, refine skills, revisit old hobbies, and discover new passions in a family environment.',
    jsonld: `{
      "@context": "https://schema.org",
      "@type": "localBusiness",
      "image": "https://parkvisalia.com/img/gallery/visalia-living-room.jpg",
      "logo": "https://parkvisalia.com/img/park-visalia-logo.png",
      "address": {
        "@type": "postalAddress",
        "addressLocality": "Visalia",
        "addressRegion": "CA",
        "postalCode": "93277",
        // eslint-disable-next-line comma-dangle
        "streetAddress": "3939 West Walnut Ave."
      },
      "name": "Park Visalia Assisted Living & Memory Care",
      "url": "https://parkvisalia.com",
      // eslint-disable-next-line comma-dangle
      "telephone": "+15596253388",
    // eslint-disable-next-line comma-dangle
      "sameAs": ["https://www.facebook.com/parkvisaliaseniorliving/","https://www.instagram.com/parkvisalia_seniorliving/"]
    }`,
  });
});

router.get('/about', (req, res) => {
  res.render('about.hbs', {
    title: 'About Park Visalia',
  });
});

router.get('/photos', (req, res) => {
  res.render('photos.hbs', {
    title: 'Photo Gallery',
    albums: [
      {
        title: '',
        target: 'park-visalia-community-photos',
        description: '',
        photos: [
          { src: '/img/gallery/visalia-lobby.jpg', alt: '' },
          { src: '/img/gallery/visalia-living-room.jpg', alt: '' },
          { src: '/img/gallery/visalia-activity-room.jpg', alt: '' },
          { src: '/img/gallery/visalia-theater.jpg', alt: '' },
          { src: '/img/gallery/visalia-bedroom.jpg', alt: '' },
          { src: '/img/gallery/visalia-courtyard-2500.jpg', alt: '' },
          { src: '/img/gallery/visalia-courtyard-2.jpg', alt: '' },
          { src: '/img/gallery/visalia-massage-room.jpg', alt: '' },
        ],
      },
    ],
  });
});

router.get('/photos/activities', (req, res) => {
  res.render('photos.hbs', {
    title: 'Activities Photo Gallery',
    albums: [
      {
        title: 'Animal Friends',
        target: 'animal-friends',
        description: '',
        photos: [
          { src: '/img/activities/2020/pet-adoption/PVpet1.jpg', alt: '' },
          { src: '/img/activities/2020/pet-adoption/PVpet2.jpg', alt: '' },
          { src: '/img/activities/2020/pet-adoption/PVpet3.jpg', alt: '' },
          { src: '/img/activities/2020/pet-adoption/PVpet4.jpg', alt: '' },
          { src: '/img/activities/2020/pet-adoption/PVpet5.jpg', alt: '' },
          { src: '/img/activities/2020/pet-adoption/PVpet6.jpg', alt: '' },
          { src: '/img/activities/2020/pet-adoption/PVpet7.jpg', alt: '' },
        ],
      },
      {
        title: 'Texas Chili Cook-Off - January 2020',
        target: 'park-visalia-community-photos',
        description: '',
        photos: [
          { src: '/img/activities/2020/chili-cookoff/Chili1.jpg', alt: '' },
          { src: '/img/activities/2020/chili-cookoff/Chili2.jpg', alt: '' },
          { src: '/img/activities/2020/chili-cookoff/Chili3.jpg', alt: '' },
          { src: '/img/activities/2020/chili-cookoff/Chili4.jpg', alt: '' },
          { src: '/img/activities/2020/chili-cookoff/Chili5.jpg', alt: '' },
          { src: '/img/activities/2020/chili-cookoff/Chili6.jpg', alt: '' },
          { src: '/img/activities/2020/chili-cookoff/Chili7.jpg', alt: '' },
          { src: '/img/activities/2020/chili-cookoff/Chili8.jpg', alt: '' },
        ],
      },
      {
        title: 'Happy Holidays - December 2019',
        target: 'holidays-2019',
        description: '',
        photos: [
          { src: '/img/activities/2019/holidays/PV1.jpg', alt: '' },
          { src: '/img/activities/2019/holidays/PV2.jpg', alt: '' },
          { src: '/img/activities/2019/holidays/PV3.jpg', alt: '' },
          { src: '/img/activities/2019/holidays/PV4.jpg', alt: '' },
          { src: '/img/activities/2019/holidays/PV5.jpg', alt: '' },
        ],
      },
      {
        title: 'Grand Opening - October 2019',
        target: 'grand-opening',
        description: '',
        photos: [
          { src: '/img/activities/2019/grand-opening/Tipper1.jpg', alt: '' },
          { src: '/img/activities/2019/grand-opening/Tipper2.jpg', alt: '' },
          { src: '/img/activities/2019/grand-opening/JPEGpark visalia_save the date_flyer_.jpg', alt: '' },
        ],
      },
    ],
  });
});

router.get('/photos/dining', (req, res) => {
  res.render('photos.hbs', {
    title: 'Dining Photo Gallery',
    description: 'Our culinary team at Park Visalia Assisted Living & Memory Care is committed to providing a nurturing and satisfying dining experience for our residents. Always having our residents well-being and care in mind, our meals are prepared with fresh and flavorful ingredients with dining options and choices.',
    albums: [
      {
        title: '',
        target: 'park-visalia-dining-photos',
        photos: [
          { src: '/img/dining/PVFoodpicture.png', alt: '' },
          { src: '/img/dining/Valentines1.jpg', alt: '' },
          { src: '/img/dining/Valentines2.jpg', alt: '' },
          { src: '/img/dining/Valentines3.jpg', alt: '' },
          { src: '/img/dining/dining.jpeg', alt: '' },
        ],
      },
    ],
  });
});

router.get('/videos', (req, res) => {
  res.render('videos.hbs', {
    title: 'Videos',
  });
});

router.get('/floor-plans', (req, res) => {
  res.render('floor-plans.hbs', {
    title: 'Floorplans',
  });
});

router.get('/assisted-living', (req, res) => {
  res.render('assisted-living.hbs', {
    title: 'Assisted Living',
  });
});

router.get('/memory-care', (req, res) => {
  res.render('memory-care.hbs', {
    title: 'Memory Care',
  });
});

router.get('/activities', (req, res) => {
  res.render('activities.hbs', {
    title: 'Events & Activities',
  });
});

router.get('/covid-19', (req, res) => {
  res.render('covid.hbs', {
    title: 'COVID-19',
  });
});

router.get('/testimonials', (req, res) => {
  res.render('testimonials.hbs', {
    title: 'Family Testimonials',
  });
});

router.get('/sitemap.xml', (req, res) => {
  const file = `${__dirname}/../public/sitemaps/sitemap.xml`;
  res.download(file);
});

router.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send('User-agent: *\nAllow: /*\nSitemap: https://parkvisalia.com/sitemap.xml');
});

router.get('/contact', (req, res) => {
  res.render('contact.hbs', {
    title: 'Contact Us',
  });
});

router.post('/contact', [
  check('fromEmail').isEmail().normalizeEmail(),
  check('firstName').trim().escape(),
  check('lastName').trim().escape().notEmpty(),
  check('phone').isMobilePhone('en-US'),
  check('referralSource').trim().escape(),
  check('inquiringFor').trim().escape(),
  check('brochure').trim().escape(),
  check('tour').trim().escape(),
  check('comments').trim().escape(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send();
  }
  const toEmail = process.env.EMAIL_RECIPIENT.split(',');
  const {
    fromEmail,
    firstName,
    lastName,
    phone,
    referralSource,
    inquiringFor,
    brochure,
    tour,
    comments,
  } = req.body;
  const msg = {
    to: toEmail,
    from: fromEmail,
    subject: `Park Visalia Contact Form: ${firstName} ${lastName} - ${fromEmail}`,
    text: `${firstName} ${lastName} has submitted an inquiry through the contact form on parkvisalia.com. They can be contacted by phone at ${phone} and by email at ${fromEmail}.\r\nInquiring for:${inquiringFor}\r\nReferred by: ${referralSource}\r\nBrochure:${brochure}\r\nTour:${tour}\r\n\r\nMessage start: ${comments}`,
    html: `
      <h1>New Contact Form Submission</h1>
        <p><strong>${firstName} ${lastName}</strong> has submitted an inquiry through the contact form on parkvisalia.com.</p>
        <h2>Contact Details</h2>
        <ul>
          <li>Email: ${fromEmail}</li>
          <li>Phone: ${phone}</li>
          <li>Referred by: ${referralSource}</li>
          <li>Inquiring for: ${inquiringFor}</li>
          <li>Brochure: ${brochure}</li>
          <li>Tour: ${tour}</li>
        </ul>
        <h2>Message Start:</h2>
        <p>${comments}</p>
        `,
  };
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sgMail.send(msg);
  return res.send('Thank you for your inquiry! Our Community Relations Director will reach out to you shortly.');
});

module.exports = router;
