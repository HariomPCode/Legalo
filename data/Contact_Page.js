const CONTACT_PAGE = {
  header: {
    title: "Contact Us",
    description: "Have questions about LegaloAI? Our team is here to help.",
  },

  form: {
    title: "Send us a message",
    fields: [
      {
        label: "Name",
        name: "name",
        type: "text",
        icon: "fas fa-user",
        required: true,
        placeholder: "Your name",
      },
      {
        label: "Email",
        name: "email",
        type: "email",
        icon: "fas fa-envelope",
        required: true,
        placeholder: "you@example.com",
      },
      {
        label: "Company",
        name: "company",
        type: "text",
        icon: "fas fa-building",
        required: false,
        placeholder: "Company name",
      },
      {
        label: "Message",
        name: "message",
        type: "textarea",
        icon: "fas fa-comment-dots",
        required: true,
        placeholder: "Tell us how we can help",
        rows: 4,
      },
    ],
    submitLabel: "Send Message",
  },

  contactInfo: [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "support@legalo.ai",
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+91 98765 43210",
    },
    {
      icon: "fas fa-location-dot",
      title: "Office",
      value: "Pune, Maharashtra, India",
    },
  ],

  supportCard: {
    icon: "fas fa-headset",
    title: "Need quick help?",
    description: "Our team usually responds within 24 hours.",
  },
};

export default CONTACT_PAGE;
