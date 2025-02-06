export const platforms = [
    {
        label: 'Frontend',
        value: 20, // Setting explicitly as 60%
    },
    {
        label: 'Backend',
        value: 40, // Setting explicitly as 40%
    },
    {
        label: 'Remaning',
        value: 40, // Setting explicitly as 40%
    },
];

export const valueFormatter = (item) => `${item.value}%`;
