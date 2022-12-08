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

export const visibleColumnsPlaces = [
  'place',
  'total',
  'perctotal',
  'totaloriginal',
  'percoriginal',
  'totalreed',
  'percreediciones'
];
