export const columnsPlacesAll = [
  {
    name: 'place_print_id',
    label: 'ID',
    align: 'right',
    field: 'place_print_id',
    sortable: false
  },
  {
    name: 'place',
    label: 'Lugar',
    required: true,
    align: 'left',
    field: 'place',
    sortable: true
  },

  {
    name: 'total',
    label: 'Total',
    required: true,
    align: 'right',
    field: 'total',
    sortable: true
  },

  {
    name: 'perctotal',
    label: '% Total',
    required: true,
    align: 'right',
    field: 'perctotal',
    sortable: true
  },
  {
    name: 'totaloriginal',
    label: 'Total (original)',
    required: true,
    align: 'right',
    field: 'totaloriginal',
    sortable: true
  },
  {
    name: 'percoriginal',
    label: '% Original',
    required: true,
    align: 'right',
    field: 'percoriginal',
    sortable: true
  },
  {
    name: 'totalreed',
    label: 'Total (reediciones)',
    required: true,
    align: 'right',
    field: 'totalreed',
    sortable: true
  },
  {
    name: 'percreediciones',
    label: '% Reediciones',
    required: true,
    align: 'right',
    field: 'percreediciones',
    sortable: true
  }
];

export const initialPaginationPlaces = {
  sortBy: 'total',
  descending: true,
  page: 1,
  rowsPerPage: 20
};

export const initialPaginationHouses = {
  sortBy: 'provincia',
  descending: false,
  page: 1,
  rowsPerPage: 20
};

export const initialPaginationHousesProvinces = {
  sortBy: 'total',
  descending: true,
  page: 1,
  rowsPerPage: 20
};

export const initialPaginationCategories = {
  sortBy: 'total',
  descending: true,
  page: 1,
  rowsPerPage: 20
};

export const visibleColumnsPlaces = [
  'place',
  'total',
  'perctotal',
  'totaloriginal',
  'percoriginal',
  'totalreed',
  'percreediciones'
];

export const visibleColumnsHouses = [
  'housename',
  'provincia',
  'place',
  'country',
  'pop1500',
  'univ1450'
];

export const columnsHousesAll = [
  {
    name: 'housename',
    label: 'House',
    align: 'left',
    field: 'housename',
    sortable: true
  },
  {
    name: 'province',
    label: 'Province',
    align: 'left',
    field: 'provincia',
    sortable: true
  },
  {
    name: 'place',
    label: 'Place',
    align: 'left',
    field: 'place',
    sortable: true
  },
  {
    name: 'country',
    label: 'Country',
    align: 'right',
    field: 'country',
    sortable: true
  },
  {
    name: 'pop1500',
    label: 'Population in 1500',
    align: 'right',
    field: 'pop1500',
    sortable: true
  },
  {
    name: 'univ1450',
    label: 'Univ. in 1450',
    align: 'right',
    field: 'univ1450',
    sortable: true
  }
];

export const columnsAuthorsAll = [
  {
    name: 'person_id',
    label: 'ID',
    required: true,
    align: 'left',
    field: 'person_id',
    sortable: false
  },
  {
    name: 'author',
    label: 'Author',
    required: true,
    align: 'left',
    field: 'author',
    sortable: true
  },
  {
    name: 'datebirth',
    label: 'Nacimiento',
    required: true,
    align: 'right',
    field: 'datebirth',
    sortable: true
  },
  {
    name: 'datedeath',
    label: 'Muerte',
    required: true,
    align: 'right',
    field: 'datedeath',
    sortable: true
  },
  {
    name: 'totaloriginal',
    label: 'Total (originales)',
    align: 'right',
    field: 'totaloriginal',
    sortable: true
  },
  {
    name: 'totalprinted',
    label: 'Total (impresos)',
    align: 'right',
    field: 'totalprinted',
    sortable: true
  },
  {
    name: 'totalmanuscrit',
    label: 'Total (manuscritos)',
    align: 'right',
    field: 'totalmanuscrit',
    sortable: true
  },
  {
    name: 'totalreed',
    label: 'Total (reediciones)',
    align: 'right',
    field: 'totalreed',
    sortable: true
  }
];

export const initialPaginationAuthors = {
  sortBy: 'total',
  descending: true,
  page: 1,
  rowsPerPage: 20
};

export const columnsCatsAuthorById = [
  {
    name: 'theme_id',
    label: 'ID',
    required: true,
    align: 'right',
    field: 'theme_id'
  },
  {
    name: 'theme',
    label: 'Tema',
    required: true,
    align: 'left',
    field: 'theme',
    sortable: true
  },
  {
    name: 'total',
    label: 'Total',
    required: true,
    align: 'right',
    field: 'total',
    sortable: true
  }
];

export const columnsCategoriesAll = [
  {
    name: 'theme_id',
    label: 'ID',
    required: true,
    align: 'right',
    field: 'theme_id'
  },
  {
    name: 'theme',
    label: 'Tema',
    required: true,
    align: 'left',
    field: 'theme',
    sortable: true
  },

  {
    name: 'total',
    label: 'Total',
    required: true,
    align: 'right',
    field: 'total',
    sortable: true
  }
];

export const columnsHousesProvincesAll = [
  {
    name: 'province_id',
    align: 'left',
    field: 'province_id'
  },
  {
    name: 'province_name',
    label: 'Province',
    required: true,
    align: 'left',
    field: 'province_name',
    sortable: true
  },
  {
    name: 'total',
    label: 'Total',
    required: true,
    align: 'right',
    field: 'total',
    sortable: true
  }
];

export const visibleColumnsHousesProvinces = ['province_nem', 'total'];
