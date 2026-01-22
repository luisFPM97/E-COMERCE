async function getProducts() {
  // Datos simulados de productos
  const mockProducts = [
    {
      id: 1,
      name: "Laptop Premium",
      price: 1299.99,
      quantity: 15,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
      description: "Laptop de alto rendimiento con procesador Intel i7, 16GB RAM y 512GB SSD. Ideal para trabajo profesional y gaming."
    },
    {
      id: 2,
      name: "Auriculares Bluetooth",
      price: 89.99,
      quantity: 30,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      description: "Auriculares inalámbricos con cancelación de ruido activa, batería de 30 horas y sonido Hi-Fi premium."
    },
    {
      id: 3,
      name: "Smartwatch Deportivo",
      price: 249.99,
      quantity: 20,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      description: "Reloj inteligente con monitor de frecuencia cardíaca, GPS integrado y resistente al agua hasta 50m."
    },
    {
      id: 4,
      name: "Teclado Mecánico RGB",
      price: 129.99,
      quantity: 25,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
      description: "Teclado mecánico gaming con switches Cherry MX, iluminación RGB personalizable y reposamuñecas."
    },
    {
      id: 5,
      name: "Cámara Digital 4K",
      price: 699.99,
      quantity: 10,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
      description: "Cámara profesional con sensor de 24MP, grabación 4K a 60fps y estabilización de imagen integrada."
    },
    {
      id: 6,
      name: "Mouse Gaming Pro",
      price: 59.99,
      quantity: 40,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
      description: "Mouse ergonómico con sensor óptico de 16000 DPI, 8 botones programables y RGB personalizable."
    },
    {
      id: 7,
      name: "Monitor Ultrawide 34\"",
      price: 449.99,
      quantity: 12,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
      description: "Monitor curvo ultrawide QHD con panel IPS, 144Hz de frecuencia y HDR400 para colores vibrantes."
    },
    {
      id: 8,
      name: "Tablet Pro 12.9\"",
      price: 899.99,
      quantity: 18,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
      description: "Tablet profesional con pantalla Retina, chip M1, compatible con Apple Pencil y Magic Keyboard."
    }
  ]

  try {
    const res = await window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    
    const data = await res.json()
    
    // Verificar que data tiene productos válidos
    if (data && Array.isArray(data) && data.length > 0) {
      return data
    } else {
      console.log('No se obtuvieron productos del servidor, usando datos simulados')
      return mockProducts
    }
  } catch (error) {
    console.log('Error al obtener productos del servidor:', error)
    console.log('Usando datos simulados')
    return mockProducts
  }
}

export default getProducts