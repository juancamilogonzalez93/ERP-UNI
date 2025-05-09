// src/mock/dashboardData.js
export const dashboardData = {
    summary: [
      { title: "Ventas Totales", value: "$12,345", icon: "💰", trend: "up" },
      { title: "Clientes Nuevos", value: "56", icon: "👥", trend: "up" },
      { title: "Productos", value: "243", icon: "📦", trend: "stable" },
      { title: "Órdenes", value: "189", icon: "📋", trend: "down" }
    ],
    revenueData: [
      {
        id: "revenue",
        data: [
          { x: "Ene", y: 4000 },
          { x: "Feb", y: 3000 },
          // ... más meses
        ]
      }
    ],
    teamData: [
      { id: 1, name: "Juan Pérez", role: "Ventas", status: "active" },
      // ... más miembros
    ]
  };