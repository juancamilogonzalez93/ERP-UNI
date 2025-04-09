import { Card, CardContent, Typography, useTheme } from '@mui/material';
import { ArrowUpward, People } from '@mui/icons-material';

export default function SummaryCard({ title, value, icon, trend }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        bgcolor: theme.palette.background.paper,
        borderRadius: 2,
        minWidth: 200,
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" color="textSecondary">
            {title}
          </Typography>
          <Box color={theme.palette.primary.main}>{icon}</Box>
        </Box>
        <Typography variant="h4" mt={1}>
          {value}
        </Typography>
        {trend && (
          <Box display="flex" alignItems="center" mt={1}>
            <ArrowUpward color="success" fontSize="small" />
            <Typography variant="caption" color="textSecondary" ml={0.5}>
              {trend} vs último mes
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}