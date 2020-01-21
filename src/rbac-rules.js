const rules = {
  user: {
    static: [
      'admin-page:visit'
    ],
  },
  admin: {
    static: [
      'admin-page:visit',
      'admin-page:edit',
    ]
  }
};

export default rules;
