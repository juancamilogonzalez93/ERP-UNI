// src/pages/dashboard/index.jsx
import { Grid, Box } from '@mui/material';
import SummaryCard from '../../components/SummaryCards/SummaryCard';
import RevenueChart from '../../components/Charts/RevenueChart';
import TeamTable from '../../components/TeamTable/TeamTable';
import { dashboardData } from '../../mock/dashboardData';

// Iconos (debes importarlos de tu librería de iconos)
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import ListAltIcon from '@mui/icons-material/ListAlt';

export default function DashboardPage() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {/* Tarjetas de Resumen */}
        {dashboardData.summary.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <SummaryCard
              title={item.title}
              value={item.value}
              icon={getIconComponent(item.icon)}
            />
          </Grid>
        ))}

        {/* Gráfico de Ingresos */}
        <Grid item xs={12}>
          <RevenueChart data={dashboardData.revenueData} />
        </Grid>

        {/* Tabla de Equipo */}
        <Grid item xs={12}>
          <TeamTable data={dashboardData.teamData} />
        </Grid>
      </Grid>
    </Box>
  );
}

// Helper para iconos
function getIconComponent(iconKey) {
  const icons = {
    '💰': <PointOfSaleIcon fontSize="large" />,
    '👥': <PeopleIcon fontSize="large" />,
    '📦': <InventoryIcon fontSize="large" />,
    '📋': <ListAltIcon fontSize="large" />
  };
  return icons[iconKey] || null;
}