import * as React from 'react';
import Box from '@mui/material/Box';
import { PieChart } from '@mui/x-charts/PieChart';
import { platforms, valueFormatter } from './webUsageStats'; // Updated Import

export default function PieAnimation() {
    const [radius, setRadius] = React.useState(20);


    return (
        <Box sx={{ width: '100%' }}>
            <PieChart

                height={150}
                series={[
                    {
                        data: platforms, // Use updated "platforms" data (Frontend & Backend)
                        innerRadius: radius,
                        arcLabel: (params) => params.label ?? '',
                        arcLabelMinAngle: 20,
                        valueFormatter,
                    },
                ]}
            />

        </Box>
    );
}
