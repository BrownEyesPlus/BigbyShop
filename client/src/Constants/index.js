export const LINK = {
  nav: {
    main: [
      {
        name: 'home',
        url: '/',
      },
      {
        name: 'Shop now',
        url: '/shop',
      },
      {
        name: 'blog',
        url: '/blogspage',
      },
    ],
    profile: {
      name: 'My profile',
      url: '/profile',
    },
    favorite: {
      name: 'My favorite',
      url: '/favorite',
    },
  },
}

export const ORDER = {
  status: {
    0: { name: 'Chờ đóng hàng', style: 'wait' },
    1: { name: 'Đang vận chuyển', style: 'transporting' },
    2: { name: 'Đã nhận', style: 'received' },
    3: { name: 'Bị hủy', style: 'cancel' },
  }
}
